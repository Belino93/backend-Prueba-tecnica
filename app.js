const express = require("express");
const mongoose = require("./config/mongoose.config.js");
const contratosRouter = require("./routers/contratos.router")
const app = express();

// Middlewares
app.use(express.json());

// Conexion BD
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Conectado a la BD");
});
connection.on("error", (error) => {
  console.log("Error en la conexión a la BD: ", error);
});

//Rutas
app.use("/", contratosRouter);


app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
