import express from "express";

const PORT = 3000;
const server = express();

// Middleware para servir archivos estáticos desde el directorio 'public'
server.use(express.static("public", { extensions: ["html"] }));

// Middleware para simular un error 500
server.use("/simulate-error", (req, res) => {
    res.status(500).send("Error 500: Error interno del servidor");
});

// Middleware que manejará todas las solicitudes que no coincidan con las rutas definidas
server.use("*", (req, res) => {
    res.status(404).send("Error 404: Página no encontrada");
});

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
