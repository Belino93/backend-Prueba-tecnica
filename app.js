const express = require("express");
const mongoose = require("./config/mongoose.config.js");
const contratosRouter = require("./routers/contratos.router");
const app = express();
let PORT = process.env.PORT || 3005;
const cors = require('cors')
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
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

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: " + PORT);
});
