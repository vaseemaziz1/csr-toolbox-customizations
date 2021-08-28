#!/usr/bin/env bash
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $BASE_DIR/sdk
./sdk.sh build
