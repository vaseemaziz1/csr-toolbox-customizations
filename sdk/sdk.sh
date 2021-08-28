#!/bin/bash

Q_TITLE=custom-lookandfeel
Q_VERSION=1.0.0.${BUILD_NUMBER:-0}
Q_COMMIT=$(git rev-parse --short HEAD)
Q_BRANCH=$(git rev-parse --abbrev-ref HEAD)

SDK_IMAGE=artifactory.qvantel.net/csr-toolbox-lookandfeel-sdk:31.0.0.16_Millicom-CO-drop1_40f6d310

docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $PWD:/work -e Q_TITLE=$Q_TITLE -e Q_BRANCH=$Q_BRANCH -e Q_VERSION=$Q_VERSION -e Q_COMMIT=$Q_COMMIT $SDK_IMAGE $@
