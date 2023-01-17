const express = require("express");
const mongoose = require("./config/mongoose.config.js");
const contratosRouter = require("./routers/contratos.router");
const app = express();
let PORT = process.env.PORT || 3005;
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

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
app.use(cors(corsOptions));
//Rutas

app.use("/", contratosRouter);

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: " + PORT);
});
