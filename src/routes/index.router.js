//Importamos express
const express = require("express");

//Se utilizan los metodos de router que pertenece a la libreria de express
const router = express.Router();

//importar el objeto controller
const controller = require("../controllers/index.controller");

router.get("/", controller.index);

module.exports = router;