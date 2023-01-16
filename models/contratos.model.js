const mongoose = require("../config/mongoose.config");

const contratoSchema = {
  nombre: { type: "String", required: true },
  apellido1: "String",
  apellido2: "String",
  documento: { type: "String", required: true },
  cp: { type: "Number", required: true },
  localidad: "String",
  direccion: "String",
  telefono: { type: "String", required: true, minLength: 9, },
  creado: { type: Date, default: Date.now },
  borrar: {type:Boolean, default: false},
};

const ContratoModel = mongoose.model('Contrato', contratoSchema);

module.exports = ContratoModel