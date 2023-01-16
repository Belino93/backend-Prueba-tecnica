const ContratoModel = require("../models/contratos.model");
const { contratoFindOne } = require("../services/contratos.services");

const contratoCreateController = async (req, res) => {
  try {
    const body = req.body;
    const contrato = new ContratoModel({
      nombre: body.nombre,
      apellido1: body.apellido1,
      apellido2: body.apellido2,
      documento: body.documento,
      cp: body.cp,
      localidad: body.localidad,
      direccion: body.direccion,
      telefono: body.telefono,
    });
    await contrato.save();
    res.status(201).json(contrato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const contratosGetAllController = async (req, res) => {
  try {
    const contratos = await ContratoModel.find();
    res.json(contratos);
  } catch (error) {
    res.json(error);
  }
};

const contratoPatchController = async (req, res) => {
  try {
    const uuid = req.body.uuid;
    const contrato = req.body.contrato;
    const contratoFound = await contratoFindOne(uuid);
    console.log(contratoFound);
    if (contratoFound) {
      for (const key in contrato) {
        contratoFound[key] = contrato[key];
      }
      await contratoFound.save();
      res.json(contratoFound);
    }
  } catch (error) {
    res.json({ message: "Contrato no encontrado" });
  }
};

const contratoPatchDeleteController = async (req, res) => {
  try {
    const uuid = req.body.uuid;
    const contratoFound = await contratoFindOne(uuid);
    if (!contratoFound) {
      res.json({ message: "Contrato no encontrado" });
    }
    contratoFound.borrar = !contratoFound.borrar;
    await contratoFound.save();
    res.json({ message: "Contrato actualizado", data: contratoFound });
  } catch (error) {
    res.json({ message: "Contrato no encontrado" });
  }
};

module.exports = {
  contratoCreateController,
  contratosGetAllController,
  contratoPatchController,
  contratoPatchDeleteController,
};
