#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload Github Dark Theme Firefox Add-ons to https://addons.mozilla.org"
echo "----------------------------------------------------------------------"
npx web-ext sign --source-dir .\dist-firefox --artifacts-dir .\ --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
