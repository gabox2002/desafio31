# Servidor Web con Express

Este es un programa simple en Node.js que utiliza Express para crear un servidor web que sirve archivos estáticos desde un directorio y maneja errores 404 y 500.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio o descarga los archivos en tu máquina.

## Uso

1. Abre una terminal y navega hasta el directorio donde se encuentran los archivos del programa.
2. Ejecuta el siguiente comando para instalar las dependencias:

    ```bash
    npm install express
    ```

3. Una vez instaladas las dependencias, ejecuta el programa con el siguiente comando:

    ```bash
    node server.js
    ```

4. El servidor estará corriendo en `http://localhost:3000`. Puedes acceder a las páginas estáticas y simular errores accediendo a las rutas correspondientes:

    - Página principal: `http://localhost:3000/index.html`
    - Página "About": `http://localhost:3000/about.html`
    - Página "Contact": `http://localhost:3000/contact.html`
    - Simular error 500: `http://localhost:3000/simulate-error`
    - Ruta no encontrada (error 404): cualquier ruta no definida anteriormente.

## Estructura del Proyecto

- `server.js`: El archivo principal que contiene el código del servidor.
- `public/`: Directorio que contiene los archivos HTML estáticos del sitio web.

## Dependencias

- [Express](https://www.npmjs.com/package/express): Framework web para Node.js que simplifica la creación de servidores web.
