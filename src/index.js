//importacion de express
const express = require("express");
//asignación de express a una constante llamada app
const app = express();

// app.get("/", (req, res) => {
//   res.send(console.log("Conexión exitosa"));
// });

//ROUTERS
//hacer uso de la ruta relacionada en la carpeta router
app.use(require("./routes/index.router"))

app.listen(3000, () => {
  console.log("Servidor a la respuesta de conexiones");
});

// password
//  o7m6njqnt6L6tQTN

//mongodb+srv://petter0912:<password>@cluster0.mblvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
