# Tarea 3. Bases de datos NoSQL (MongoDB)

---

##### Integrantes:
1. *Daniel Charua* - *A01017419* - *CSF*
2. *[Poner aquí Nombre y Apellidos del integrante 2]* - *[Poner aquí su Matrícula]* - *[Poner aquí su campus]*
3. *[Poner aquí Nombre y Apellidos del integrante 3]* - *[Poner aquí su Matrícula]* - *[Poner aquí su campus]*
4. *[Poner aquí Nombre y Apellidos del integrante 4]* - *[Poner aquí su Matrícula]* - *[Poner aquí su campus]*

---
## 1. Aspectos generales

Las orientaciones de la tarea se encuentran disponibles en la plataforma **Canvas**.

Este documento es una guía sobre qué información debe entregar como parte de la tarea, qué requerimientos técnicos debe cumplir y la estructura que debe seguir para organizar su entrega.


### 1.1 Requerimientos técnicos

A continuación se mencionan los requerimientos técnicos mínimos de la tarea, favor de tenerlos presente para que cumpla con todos.

* El equipo tiene la libertad de elegir las tecnologías de desarrollo a utilizar en la tarea, sin embargo, debe tener presente que la solución final se deberá ejecutar en una plataforma en la nube. Puede ser  [Google Cloud Platform](https://cloud.google.com/?hl=es), [Azure](https://azure.microsoft.com/en-us/), [AWS](https://aws.amazon.com/es/free/) u otra.
* La arquitectura de la solución deberá estar separada claramente por capas (*frontend*, *backend*, datos y almacenamiento).
* Todo el código, *scripts* y la documentación de la tarea debe alojarse en este repositorio de GitHub, siguiendo la estructura que aparece a continuación.

### 1.2 Estructura del repositorio

El proyecto debe seguir la siguiente estructura de carpetas:
```
- / 			        # Raíz de toda la tarea
    - README.md			# Archivo con la información general de la tarea (este archivo)
    - frontend			# Carpeta con la solución del frontend (Web app)
    - backend			# Carpeta con la solución del backend (API)
    - scripts		        # Carpeta con los scripts necesarios para generar la base de datos, cargar datos y ejecutar las consultas
    - database			# Carpeta con el modelo de la bases de datos utilizando JSON Schema

```

### 1.3 Documentación de la tarea

Como parte de la entrega de la tarea, se debe incluir la siguiente información:

* Diagrama del *Modelo de la base de datos utilizando JSON Schema*.
* *Scripts* para generar la base de datos, cargar datos y ejecutar consultas.
* Guía de configuración, instalación y despliegue de la aplicación en la plataforma en la nube  seleccionada.
* El código debe estar documentado siguiendo los estándares definidos para el lenguaje de programación seleccionado.

## 2. Solución

A continuación aparecen descritos los diferentes elementos que forman parte de la solución de la tarea.

### 2.1 Modelo de la *base de datos* 

*[Incluya aquí el modelo JSON Schema y explique los patrones utilizados en cada caso.*

### 2.2 Arquitectura de la solución

*[Incluya aquí un diagrama donde se aprecie la arquitectura de la solución propuesta, así como la interacción entre los diferentes componentes de la misma.]*

### 2.3 Frontend

*[Incluya aquí una explicación de la solución utilizada para el frontend de la tarea. No olvide incluir las ligas o referencias donde se puede encontrar información de los lenguajes de programación, frameworks y librerías utilizadas.]*

#### 2.3.1 Lenguaje de programación
#### 2.3.2 Framework
#### 2.3.3 Librerías de funciones o dependencias

### 2.4 Backend

Para backend se creo una API REST en Node, que se conecta al cluster de Mongo Atlas para realizar las operaciónes CRUD 

#### 2.4.1 Lenguaje de programación
[Javascript](https://www.javascript.com/) es el lenguaje de programación de Node.

#### 2.4.2 Framework
MEAN stack
- [Node](https://nodejs.org/en/about/) 
- [Express](https://expressjs.com/)

#### 2.4.3 Librerías de funciones o dependencias
- [Mongoose](https://mongoosejs.com/) para conectarse a MongoDB.
- [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
-  [cors](https://www.npmjs.com/package/cors)

## 2.5 Pasos a seguir para utilizar la aplicación
Dentro de la carpeta backend se deben de instalar las dependencias con el siguiente código
```bash
npm install
```

Posteriormente para correr el servidor se debe ejecutar 
```bash
npm start
```

Listo el backend estara corriendo en el puerto 8081 y mediante un curl request se podra acceder a los endpoints

## 3. Endpoints
En nuestra base de datos existen 3 colecciónes:
- Cases
- Buisnesses
- Locations

Cada endpoint tiene sus funciones CRUD ademas de ciertos queries con el aggregation framework

### Cases
- GET : cases/getALL -> Se regresa un JSON con los primeros 100 elementos de la colección, para eficientizar el tiempo de respuesta
- PUT: cases/add ->  se agrega un objeto nuevo a la colección, se espera un objeto JSON con los datos del objeto nuevo
- DELETE: cases/delete/:id ->  se borra un objeto con el id en el URL de la colección
- PUT: cases/update/:id ->  se edita el objeto con el id de la URL de la colección, se espera un objeto JSON con los datos del objeto

### Buisnesses
- GET : buisnesses/getALL -> Se regresa un JSON con los primeros 100 elementos de la colección, para eficientizar el tiempo de respuesta
- PUT: buisnesses/add ->  se agrega un objeto nuevo a la colección, se espera un objeto JSON con los datos del objeto nuevo
- DELETE: buisnesses/delete/:id ->  se borra un objeto con el id en el URL de la colección
- PUT: buisnesses/update/:id ->  se edita el objeto con el id de la URL de la colección, se espera un objeto JSON con los datos del objeto

### Locations
- GET : locations/getALL -> Se regresa un JSON con los primeros 100 elementos de la colección, para eficientizar el tiempo de respuesta
- PUT: locations/add ->  se agrega un objeto nuevo a la colección, se espera un objeto JSON con los datos del objeto nuevo
- DELETE: locations/delete/:id ->  se borra un objeto con el id en el URL de la colección
- PUT: locations/update/:id ->  se edita el objeto con el id de la URL de la colección, se espera un objeto JSON con los datos del objeto


## 4. Referencias
- [Documentación de Mongo ](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
- [Documentación de Node](https://nodejs.org/en/docs/)
- [Tutorial MEAN](https://www.thepolyglotdeveloper.com/2019/02/building-rest-api-mongodb-mongoose-nodejs/)


