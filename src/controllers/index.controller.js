//El controller sera enviará un objeto
const controller = {};
const connection = require("../dbConnection/connection");
const listFavModel = require("../models/listFav.models");

controller.index = async (req, res) => {
  res.send(console.log("la conexión ha sido correcta desde index.controllers"));
  connection();
  const allListFav = await listFavModel.find();
  console.log(allListFav);
};

//Exportar el objeto controller
module.exports = controller;
