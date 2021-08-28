logLevel := Level.Warn

resolvers += "qvantel-plugins-release" at "https://artifactory.qvantel.net/artifactory/plugins-release/"

resolvers += "qvantel-libs-local" at "https://artifactory.qvantel.net/artifactory/libs-release-local/"

resolvers += "Typesafe repository" at "https://repo.typesafe.com/typesafe/releases/"

resolvers += "qvantel-plugins-release" at "https://artifactory.qvantel.net/artifactory/plugins-release/"

addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.4.3")

addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.0.4")

addSbtPlugin("com.qvantel.sbt" % "sbt-qartifact" % "[0.3,0.4]")

addSbtPlugin("com.qvantel" % "ql0-dependencies" % "11.0.0")