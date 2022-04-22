const { v4: uuidv4 } = require("uuid");

class ListFav {
  id = "";
  desc = "";
  title = "";
  link = "";

  constructor(desc, title, link) {
    this.id = uuidv4();
    this.title = title;
    this.link = link;
    this.desc = desc;
  }
}

module.exports = ListFav;
