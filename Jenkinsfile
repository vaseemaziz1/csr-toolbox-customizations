import groovy.json.JsonSlurper
echo 'Component pipeline start'

// Tag in git repo for CI base project that will be checked out
CI_BASE_VERSION = "v2.0"

// Type of CI job
TYPE = "sbt-microservice"

// Set to full, simple or auto (or define your own)
BUILD_TYPE="customization"

// TODO: read recipients from git commit info
// Email recipients, whitespace separated
EMAIL_RECIPIENTS = ""

QDOCKER_DOCKER_IMAGES_YML=["web/target/docker/docker-images.yml",
                           ]
HIPCHAT_NOTIFICATION_CHANNEL = ["38", "72"]

DELIVERY_BRANCH = "millicom_colombia-rfc"

SCOVERAGE_REPORT_FILE = ""

node {
  checkout scm

  dir('pipelinebase') {
        // Need to wipe out the CI base repository here, else new changes won't be picked up
        checkout([$class: 'GitSCM', branches: [[name: "$CI_BASE_VERSION"]],
                                    doGenerateSubmoduleConfigurations: false,
                                    extensions: [[$class: 'WipeWorkspace']],
                                    submoduleCfg: [],
                                    userRemoteConfigs: [[url: 'ssh://git@stash.qvantel.net:7999/devops/jenkins-pipeline-base.git']]])
    }

  base = load 'pipelinebase/pipelinebase.groovy'
  base.runPipeline(this)
}

def availableBuildOrders(baseOrders) {
   baseOrders["customization"] = []
   baseOrders["customization"].push("createPackage")
   return baseOrders
}

// Before compilation, set sbtopts
def createPackage() {
  sh 'sbt package qartifact:publish'
}
