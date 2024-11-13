const mongoose = require("mongoose");
require("dotenv").config();

const dbHost = process.env.DB_HOST;

const dbCon = async() => {
  //Realizar la conexion con la base de datos
  await mongoose.connect(dbHost);
};

module.exports = dbCon;
