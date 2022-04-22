

const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  //Verificar si no existe el archivo, si se cumple esta condición se retorna null
  //Utilizamos el existsSync Para verificar si el archivo existe.
  if (!fs.existsSync(archivo)) {
    return null;
  }

  //utilizamos el archivo readFileSync para leer el archivo, lo leera como un string
  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  //parseamos para que el archivo sea json
  const data = JSON.parse(info);
  // console.log(data);

  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
