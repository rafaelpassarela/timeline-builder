
# Timeline Builder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Node -v 14.18.3
npm -v 6.14.15

## Cloning and Starting (Local)
Clone this repo using `git clone https://github.com/rafaelpassarela/timeline-builder.git`
run `npm install`
and `npm start`

## Cloning and Starting (with Docker)
To build a new container run
docker build -t <IMAGE_NAME> .
FrontEnd Build: ```docker build -t timeline_frontend -f Dockerfile_frontend .```
BackEnd Api Build: ```docker build -t timeline_api -f Dockerfile_api .```

To check the new container
`docker exec -it <IMG_ID> bash`

To listening to port 3000
```docker run -it --rm -p 3000:3000 --name timeline -v "<PROJECT  PATH>":/timelinebuilder timelinebuilder```

To get image id run and find the "Time LineBuilder" (tlb) image file
```docker ps -a```

To bring up the development environment run ```docker-compose up```, the "-d" param is optional (user to unlock terminal).

## Contributions
Please, make your own branch and open a MR, that's it.

Icons provided by [React Icons](https://react-icons.github.io/react-icons)
Build with [React Bootstrap](https://react-bootstrap.github.io/)