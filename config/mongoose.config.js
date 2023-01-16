const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://mongo:VWySO2kT4frHTftPTyj5@containers-us-west-173.railway.app:5436"
  );


module.exports = mongoose;