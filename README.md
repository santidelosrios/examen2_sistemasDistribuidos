# Examen 2 Sistemas Distribuidos
> Aprovisionamiento de dos contenedores virtuales usando docker-compose

Con este proyecto, se pueden aprovisionar dos contenedores virtuales:
  - Un servidor web en Node.js que contiene una aplicación web.
  - Un servicio de base de datos usando Postgres
Mediante la aplicación se pueden consular los datos almacenados en la base de datos por medio de una URI.

## Prerequisitos

Para poder ejecutar este proyecto, se deben tener instalados en la maquina Docker y docker-compose.  

## Aprovisionamiento de los contenedores

Inicialmente se debe clonar este repositorio y, posteriormente, ejectutar docker-compose para construir las imagenes y levantar los contenedores.

```shell
git clone https://github.com/santidelosrios/examen2_sistemasDistribuidos.git
docker-compose up
```

Los dos contenedores deberían quedar corriendo y se pueden realizar las pruebas.

## Probando

Para probar el funcionamiento de este proyecto, ingrese al navegador y escriba la dirección 172.17.0.1:49160 y podrá ver la aplicación web. Posteriormente, escriba la dirección 172.17.0.1:49160/db para ver los datos almacenados en la base de datos.

## Contrato de API Rest

La siguiente tabla describe el contrato API Rest para el proyecto.

|   Method       | Descripción    |
| :------------- | :------------- |
| GET  {{host}}/db | Obtiene los datos desde la base de datos, ubicada en otro contenedor e implementada en Posgres       |
