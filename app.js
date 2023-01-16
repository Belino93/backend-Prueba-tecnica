const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middlewares
app.use(express.json());

mongoose.connect(
  "mongodb://mongo:VWySO2kT4frHTftPTyj5@containers-us-west-173.railway.app:5436"
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Conectado a la BD");
});
connection.on("error", (error) => {
  console.log("Error en la conexión a la BD: ", error);
});

// Modelo
const Contrato = mongoose.model("Contrato", {
  nombre: { type: "String", required: true },
  apellido1: "String",
  apellido2: "String",
  documento: { type: "String", required: true },
  cp: { type: "Number", required: true },
  localidad: "String",
  direccion: "String",
  telefono: { type: "String", required: true },
});

//Rutas
app.get("/", (req, res) => {
  res.json({
    response: "success",
  });
});

// Añade un contrato con los datos
app.post("/addcontract", (req, res) => {

  const contrato = new Contrato({
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    documento: req.body.documento,
    cp: req.body.cp,
    localidad: req.body.localidad,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
  });
  contrato
    .save()
    .then(doc => {
      res.json({
        response: "Contrato creado correctamente",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
