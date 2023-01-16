const express = require("express");
const contratosRouter = express.Router();

const {
    contratoCreateController,
    contratosGetAllController,
    contratoPatchController
} = require('../controllers/contratos.controllers')

contratosRouter.post('/addcontract', contratoCreateController);
contratosRouter.get('/listcontracts', contratosGetAllController)
contratosRouter.patch('/modifycontract', contratoPatchController)
contratosRouter.patch('/modifycontract', contratoPatchController)

module.exports = contratosRouter;