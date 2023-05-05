#!/bin/bash

docker build -t timeline_api_temp -f Dockerfile_api .

docker run --rm -it -v ./api:/www -w /www --name timeline_ci_tmp timeline_api_temp bash

docker rmi timeline_api_temp