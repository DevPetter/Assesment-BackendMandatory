const ListFav = require("./ListFav");

class ListFavs {
  _listado = {};

  //este getter me esta generando como solución un array
  get listadoArr() {
    const listado = [];

    //El método Object.keys() >>>retorna un array de todas las llaves
    Object.keys(this._listado).forEach((key) => {
      //le asignamos a la constante tarea, el listado qe tiene en su respectiva llave
      const listFav = this._listado[key];
      //Asignamos esa misma tarea en el listado
      listado.push(listFav);
    });
    //retornamos el listado, que sera un arreglo de objetos
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  //Cargar el array almacenado en el data.json, que son las listas almacenadas por el usuario, cuando este crea las lista.
  cargarTareasFromArray(favs = []) {
    favs.forEach((fav) => {
      this._listado[fav.id] = fav;
    });
  }

  //método que crea las tareas y que seran almacenadas en el archivo
  crearTarea(desc = "", title = "", link = "") {
    const listFav = new ListFav(desc, title, link);
    this._listado[listFav.id] = listFav;
  }
  //método paa listar la lista de Favoritos ingresados hasta el momento
  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((listFav, ind) => {
      //numero de la lista impreso en color verde
      const idx = `${ind + 1}`.green;
      //Descripción de la lista
      const { desc, title, link } = listFav;
      console.log(`${idx}. ${desc}, ${title}, ${link}`);
    });
  }
}

module.exports = ListFavs;
