const mongoose = require("mongoose");

const dbCon = async() => {
  //Realizar la conexion con la base de datos
  await mongoose.connect(
    "mongodb+srv://ijonathone:YxK7xWbbwhlAzb8D@projectmern.siurq.mongodb.net/orderManagement"
  );
};

module.exports = dbCon;
