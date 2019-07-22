#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload Github Dark Theme Chrome extension to Chrome Web Store"
echo "----------------------------------------------------------------------"

npx shipit chrome ./dist-chrome
