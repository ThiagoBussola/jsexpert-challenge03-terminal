import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import readline from 'readline';
import terminalConfig from './config/terminal.js';
import Income from './entity/Income.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    DraftLog(console).addLineListener(process.stdin)
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    this.initializeTable()
  }

  createTable() {
    return chalkTable(TABLE_OPTIONS, this.data)
  }
  
  initializeTable() {
    this.print = console.draft(this.createTable())
  }

  question(msg = '') {
    return new Promise((resolve) => this.terminal.question(msg, resolve))
  }

  closeTerminal() {
    // chamando a instancia do terminal para ser fechada
    this.terminal.close()
  }

  updateTable(item) {
    this.data.push(this.formatIncomeValue(item))
  }

  clearConsole() {
    return console.clear()
  }

  formatIncomeValue(income) {
    return new Income(income).format()
  }
}

export default CustomTerminal;
