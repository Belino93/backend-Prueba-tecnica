const express = require("express");
const contratosRouter = express.Router();

const {
    contratoCreateController,
    contratosGetAllController,
    contratoPatchController,
    contratoPatchDeleteController
} = require('../controllers/contratos.controllers')

contratosRouter.post('/addcontract', contratoCreateController);
contratosRouter.get('/listcontracts', contratosGetAllController)
contratosRouter.patch('/modifycontract', contratoPatchController)
contratosRouter.patch('/deletecontract', contratoPatchDeleteController)

module.exports = contratosRouter;