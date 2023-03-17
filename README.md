
# Timeline Builder
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
Node -v 14.18.3<br>
npm -v 6.14.15<br>

## Cloning and Starting (Local)
Clone this repo using `git clone https://github.com/rafaelpassarela/timeline-builder.git`<br>
run `npm install`<br>
and `npm start`<br>

## Cloning and Starting (with Docker)
To build a new container run<br>
```docker build -t <IMAGE_NAME> .```<br>
FrontEnd Build: ```docker build -t timeline_frontend -f Dockerfile_frontend .```<br>
BackEnd Api Build: ```docker build -t timeline_api -f Dockerfile_api .```<br>
<br>
To check the new container<br>
`docker exec -it <IMG_ID> bash`<br>
<br>
To listening to port 3000<br>
```docker run -it --rm -p 3000:3000 --name timeline -v "<PROJECT  PATH>":/timelinebuilder timelinebuilder```<br>
<br>
To get image id run and find the "Time LineBuilder" (tlb) image file<br>
```docker ps -a```<br>
<br>
To bring up the development environment run ```docker-compose up```, the "-d" param is optional (user to unlock terminal).<br>

## Containers Addresses
- PMA: http://localhost:8080/ <br>
- Front: http://localhost/ or http://localhost:3000/ <br>
- API: http://localhost:3030/ <br>

## Contributions
Please, make your own branch and open a MR, that's it. <br>
<br>
Icons provided by [React Icons](https://react-icons.github.io/react-icons)<br>
Build with [React Bootstrap](https://react-bootstrap.github.io/)<br>