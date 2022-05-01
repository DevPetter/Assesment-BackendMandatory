//requerimos o importamos la libreria de mongoose
const mongoose = require("mongoose");

//Extraemos el esquema de mongoose
const {Schema } = mongoose;

//este esquema es una funcion que recibe como parametros el objeto de nuestra estructura de datos
const listFavSchema = new Schema({
    title: String,
    description: String,
    link: String,
    name: String,
    lasname: String,
});

//importamos el modelo, recordemos la función model recibe 2 parametros, el primero es el modelo que debe coincidir con el nombre de la colección,  y el segundo parametro le pasamos el schema del modelo
const listFavModel = mongoose.model("favlist", listFavSchema);

module.exports = listFavModel;
