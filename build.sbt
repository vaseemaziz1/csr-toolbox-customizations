import sbt._
import com.typesafe.sbt.packager.MappingsHelper
import com.typesafe.sbt.packager.docker._
import com.qvantel.sbt.qartifact._
import com.qvantel.servicetemplate.qartifact._
import sbt.Keys.version

import scala.util.Properties.envOrElse

name := "tigocolombia-csr-toolbox"

val componentVersion = "31.0.0.16"

val baseImage = "artifactory.qvantel.net/csr-toolbox-web:31.0.0.16_Millicom-CO-drop1_40f6d310"

qartifactResolvedBaseImage in QArtifact := baseImage

val apiVersion = baseImage.split(":")(1).split("_")(0)

qartifactVersion in QArtifact := componentVersion

qartifactType in QArtifact := MicroServiceArtifact

scalaVersion := "2.11.11"

resolvers += "Qvantel artifactory SNAPSHOTS" at "https://artifactory.qvantel.net/artifactory/libs-snapshot-local/"
resolvers += "Qvantel artifactory releases" at "https://artifactory.qvantel.net/artifactory/libs-release/"

publishArtifact := false

def sdkBuild(dir: File): Int = {
    Process("sh" :: "sdk.sh" :: "build" :: Nil, dir) !
}

lazy val styles = TaskKey[Unit]("Generate look and feel overlay.")
styles := {
  if (sdkBuild(baseDirectory.value / "sdk") != 0) throw new Exception("Oops! sdk build crashed.")
}

lazy val impl = (project in file("impl"))
    .settings(
        scalaVersion := "2.11.11",
        name := "tigocolombia-csr-toolbox-impl",
        libraryDependencies ++= Seq("com.qvantel.rubik" % "csr-toolbox-api" % apiVersion,
            "javax.inject" % "javax.inject" % "1" % "provided",
            "com.typesafe.play" %% "play" % "2.4.6" % "provided",
            "com.typesafe.play" %% "play-cache" % "2.4.6" % "provided",
            "com.nimbusds" % "oauth2-oidc-sdk" % "5.27" % "provided",
            `scala-logging` % "provided",
            `spray-can` % "provided",
            `spray-client` % "provided",
            `spray-json` % "provided",
            `scala-test` % "test"
        ),
        artifactPath in (Compile, packageBin) ~= { defaultPath =>
            file("spec/custom") / defaultPath.getName
        },
        publishLocal := {},
        publish := {},
        cleanFiles <+= baseDirectory { base => base / ".." / "spec" / "custom" },
        resolvers in ThisBuild += "Qvantel artifactory releases" at "https://artifactory.qvantel.net/artifactory/libs-release/"
    )

lazy val root = (project in file("."))
  .enablePlugins(QArtifactPlugin)
  .settings(qartifactSettings(MicroServiceArtifact, componentVersion))
  .dependsOn(impl)
  .aggregate(impl)

publishLocal in QArtifact <<= (publishLocal in QArtifact).dependsOn(styles)
publish in QArtifact <<= (publish in QArtifact).dependsOn(styles)

dockerPackageMappings in Docker ++= MappingsHelper.directory(baseDirectory.value / "spec")
dockerPackageMappings in Docker ++= MappingsHelper.directory(baseDirectory.value / "sdk")

dockerExposedPorts in QArtifact := Seq(9000, 8118)

qartifactExposedPortNames in QArtifact := Map(
    9000 -> "csr-toolbox",
    8118 -> "qartifact"
)

qartifactHealthPort in QArtifact := Some(8118)

dockerCommands := Seq(
    Cmd("FROM", "willbeoverwritten"),
    Cmd("ADD", "spec /opt/docker/conf"),
    Cmd("ADD", "spec/custom /opt/docker/lib/custom"),
    Cmd("ADD", "sdk/target/overlay/overlay.tgz /")
)
