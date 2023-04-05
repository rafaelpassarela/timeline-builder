#!/bin/bash

java -jar open-api-generator/openapi-generator-cli.jar generate -i /api-docs/api-docs.json -g typescript -o ./open-api-generator/client

sed -i 's/\"name\": \"\"/\"name\": \"timeline-client-api\"/g' open-api-generator/client/package.json

sed -i 's/\"version\": \"\"/\"version\": \"1.0.0\"/g' open-api-generator/client/package.json

sed -i 's/\"typescript\": \"^3.9.3\"/\"typescript\": \"^4.8.4\"/g' open-api-generator/client/package.json

sed -i '1s/.*/{\"resolutions\": {\"@types\/react\": \"^15.0.16\"},/g' open-api-generator/client/package.json

cd open-api-generator/client/ && npm install && npm run build

cd ../../

npm add file:open-api-generator/client --save
