const fs = require("fs"); // filesystem

let csvToJson = require("convert-csv-to-json");

const readCsv = () => {
  let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("cp_municipios.csv");
  return json
};
module.exports = {
  readCsv,
};
