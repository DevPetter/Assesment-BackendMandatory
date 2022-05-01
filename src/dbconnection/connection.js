//requerimos del modulo de mongoose que me permitira hacer uso de la libreria de mongoose para manejar la bd
const mongoose = require("mongoose");

//hacemos uso del metodo connect que nos da el método mongoose que es el que nos va a permiti conectarnos con la base de datos.
// requiere de 2 parametros, el primero es el sitio donde esta nuestra BD, la parte 2 es para evitar errores.
const password = "petter9535";
const dbname = "favDB";
const uri = `mongodb+srv://petter0912:${password}@cluster0.mblvp.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connection = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Connection OK a la Base de datos")
    } catch (error) {
        console.log(error)
    }
};

module.exports = connection;