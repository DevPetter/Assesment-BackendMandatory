const inquirer = require("inquirer");
require("colors");

const question = [
  {
    type: "list",
    name: "opcion",
    mesage: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".yellow}.Crear lista de Fav.`,
      },
      {
        value: "2",
        name: `${"2".yellow}.Listar Fav.`,
      },
     {
        value: "0",
        name: `${"0".yellow}. Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".yellow);
  console.log("   SELECCIONE UNA OPCIÓN".cyan);
  console.log("==========================\n".yellow);
  const { opcion } = await inquirer.prompt(question);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"Enter".green} para continuar`,
    },
  ];
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput
};
