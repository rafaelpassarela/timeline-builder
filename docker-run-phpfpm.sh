#!/bin/bash

docker run --rm -it -v ./api:/www -w /www --name timeline_ci_tmp jakzal/phpqa:php8.2 bash