#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload Github Dark Theme Firefox Add-ons to https://addons.mozilla.org"
echo "----------------------------------------------------------------------"

npx shipit firefox ./dist-firefox
