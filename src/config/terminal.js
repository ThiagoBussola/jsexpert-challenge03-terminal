import chalk from 'chalk';


// TODO: criar um enum para as moedas?
export default {
  table: {
    leftPad: 2,
    columns: [
      { field: "position", name: chalk.green("Position") },
      { field: "expectation", name: chalk.blue("Expectation (BRL)") },
      { field: "conversion01", name: chalk.green("USD") },
      { field: "conversion02", name: chalk.magenta("EUR") },
      { field: "conversion03", name: chalk.red("RUB") }
    ],
  },
};
