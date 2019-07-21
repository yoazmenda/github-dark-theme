#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload Github Dark Theme Firefox Add-ons to https://addons.mozilla.org"
echo "----------------------------------------------------------------------"
npx web-ext sign --source-dir \dist-firefox --artifacts-dir \ --api-key=$WEB_EXT_API_KEY --api-secret=$WEB_EXT_API_SECRET
