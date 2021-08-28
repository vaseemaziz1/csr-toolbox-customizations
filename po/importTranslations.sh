#!/usr/bin/env bash
NPM="$(type -t npm)"

if [ -z "$NPM" ]; then
    echo "You must have npm installed"
    exit
fi

BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $BASE_DIR
npm install
npm run import
