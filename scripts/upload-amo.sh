#!/bin/bash

echo "Upload GitHub-Dark-Theme Firefox Add-ons to https://addons.mozilla.org"
npx web-ext sign --source-dir dist\ --artifacts-dir \ --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
