# bsale frontend 
Aplicación web de e-commerce para la prueba técnica de bsale.

## Objetivo y funcionamiento

En esta aplicación web se hace uso de una [API Rest](https://github.com/jehufrayle/bsale-test-backend) construida por mí mismo para consultar una base de datos sencilla tipo e-commerce.

## Como prepararlo y correrlo

Para prepararla tan solo necesitas clonar el repositorio y dentro del proyecto ejecutar el comando:

```sh
npm install
```
Este proyecto utiliza Webpack, con su plugin dotenv. Por lo que, para que funcione será necesario crear un archivo .env como el del ejemplo. Este archivo debe contener la API base que se consulta.

Por ejemplo
```env
BASE_API=http://localhost:3070
```
Esta es la base de la api que estuve utilizando mientras la desarrollaba.

Solo se necesita la base, debido a que la aplicación hace uso de los endpoints especifícos. 

Una vez preparada, se puede usar el siguiente comando para crear una build optimizada para producción

```sh
npm run build-prod
```

O, el siguiente comando, para abrir un servidor local y en modo desarrollo.

```sh
npm run start
```

## Componentes
He querido componetizar la aplicación, haciendo uso de funciones que reciben un **elemento HMTL** como contenedor y lo manipulan utilizando funciones como **createElement** y **appendChild**. 

De esta forma, se pueden generar tarjetas de productos dinámicamente sin hacer uso de ningún framework como React.

## Estilos
Para acelerar el desarrollo, he utilizado el framework de CSS **Tailwind**. Debido a esto, solo uso un archivo de CSS, que se encarga de cargar Tailwind y los estilos se definen con utilizando [utiliy classes](https://tailwindcss.com/docs/utility-first).

## Por hacer 
En esta primera versión, tan solo se pueden consultar los datos. Me quedé con las ganas de implementar un carrito de compra que permita guardar diferentes productos en un pedido.