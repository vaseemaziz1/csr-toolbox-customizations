#!/usr/bin/env bash
NPM="$(type -t npm)"

if [ -z "$NPM" ]; then
    echo "You must have npm installed"
    exit
fi

BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_VERSION="$(cat $BASE_DIR/../build.sbt | grep 'val baseImage' | sed 's/"//g' | awk -F '_' '{print $NF}')"

if [ -d "$BASE_DIR/csr-toolbox" ]; then
    read -p "This will remove the base CSR toolbox repository. Any changes will be lost. Are you sure? " -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        rm -rf $BASE_DIR/csr-toolbox
    fi
fi

cd $BASE_DIR
echo "Checking out base version $BASE_VERSION"
git clone ssh://git@stash.qvantel.net:7999/rubik/csr-toolbox.git
cd csr-toolbox
git checkout -q $BASE_VERSION

cd $BASE_DIR
npm install
npm run export

rm -rf $BASE_DIR/csr-toolbox
