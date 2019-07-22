#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload Github Dark Theme Firefox Add-ons to https://addons.mozilla.org"
echo "----------------------------------------------------------------------"
echo $AMO_JWT_ISSUER
echo "$AMO_JWT_ISSUER"
npx web-ext sign --source-dir .\dist-firefox --artifacts-dir .\ --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
