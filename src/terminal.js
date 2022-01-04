import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import chalk from 'chalk';
import readline from 'readline';
import terminalConfig from './config/terminal.js';
import terminal from './config/terminal.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    DraftLog(console).addLineListener(process.stdin)

    // não precisa armazenar numa const terminal
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
    return new Promise(resolve => terminal.question(msg, resolve))
  }

  closeTerminal() {
    this.terminal.close()
  }

  // update table
}

export default CustomTerminal;
