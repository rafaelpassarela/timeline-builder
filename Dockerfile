FROM node:14.18.3

ENV NPM_CONFIG_LOGLEVEL warn

ARG app_env

ENV APP_ENV ${app_env}

RUN mkdir -p /timelinebuilder

WORKDIR /timelinebuilder

COPY ./ ./

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi