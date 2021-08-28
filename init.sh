#!/usr/bin/env bash
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_VERSION="$(cat $BASE_DIR/build.sbt | grep 'val baseImage' | sed 's/"//g' | awk -F ':' '{print $NF}')"

SDK="artifactory.qvantel.net/csr-toolbox-lookandfeel-sdk:$BASE_VERSION"

cd $BASE_DIR
docker run --rm -v $PWD/sdk:/work $SDK init
