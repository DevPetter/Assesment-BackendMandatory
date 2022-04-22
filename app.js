require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const {
  inquirerMenu,
  pausa,
  leerInput
} = require("./helpers/inquirer");

const ListFavs = require("./models/ListFavs");

// console.clear();

const main = async () => {
  let opt = "";
  const favs = new ListFavs();
  const favsDB = leerDB();

  if (favsDB) {
    //Cargar tareas
    favs.cargarTareasFromArray(favsDB);
  }

  do {
    //Imprimir el menú (inquirerMenu)
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        const title = await leerInput("Titulo: ");
        const link = await leerInput("Link: ");
        // console.log(desc, title, link)
        favs.crearTarea(desc, title, link);
        break;

      case "2":
        //listar las opciones
        favs.listadoCompleto();
        break;
  
    }

    guardarDB(favs.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
