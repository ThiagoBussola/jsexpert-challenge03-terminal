import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';
import chalk from 'chalk';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();

const service = new IncomeService();
async function mainLoop() {
  console.info('🚀 Running...\n');

  try {
    terminal.initialize();
    const answer = await terminal.question('\n Qual seu cargo e pretenção salarial em BRL? (cargo; pretenção) \n ')

    if(answer === VOCABULARY.STOP) {
      terminal.closeTerminal()
      console.log('Obrigado, volte sempre!')
      return;
    }

    const income = await service.generateIncomeFromString(answer)
    terminal.updateTable(income)

    return mainLoop()

  } catch (error) {
    console.log(chalk.red(`\n Ops! ocorreu um erro! ${error}`))
    // Assim como em aula, o sistema não pode sair do ar, então continua rodando
  }
  return mainLoop();
}

await mainLoop();
