const ContratoModel = require("../models/contratos.model");


async function contratoFindOne(id){
    const contratoFound = await ContratoModel.findById(id).exec();
    return contratoFound
}

module.exports = {
    contratoFindOne,
}