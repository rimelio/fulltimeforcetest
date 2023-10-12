# Test FULLTIMEFORCE

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://angular.io/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" width="120" alt="Nest Logo" /></a>
</p>
<p align="center">
Este repositorio contiene el proyecto task para la postulacion en FULLTIMEFORCE, el proyecto está separado en aplicaciones, una para el front y otra para el back
</p>

## Tecnologias Usadas

Se utilizó Angular como framework para el front-end y NodeJs y NestJs para el back-end consumiendo la API Rest de GitHub para poder consultar respositorios

## Screenshots

<img src="https://i.imgur.com/hF5VGhm.jpg"></img>

## Instalacion

<p>Bajar el proyecto</p>

```bash
$ git clone https://github.com/rimelio/fulltimeforcetest.git
$ cd fulltimeforcetest
```

### Front app

```bash
$ cd front
$ npm i
$ ng s
```

### Back app

```bash
$ cd back
$ npm i
$ ng s
```

<p>Debemos ingresar al archivo .env del backend y de esta manera configurar las variables que utilizara la aplicacion para comunicarce con el API e Github</p>

```bash
TOKEN = <YOUR_GIT_TOKEN>
OWNER = <REPOSITORY_OWNER>
REPO  = <REPOSITORY_NAME>
```
