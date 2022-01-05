import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();
terminal.initialize();

const service = new IncomeService();

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
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
    // TODO: Don't forget of handling some errors beautifully ;)
    console.error('Erro', error)
    // Assim como em aula, o sistema não pode sair do ar, então continua rodando
  }
  return mainLoop();
}

await mainLoop();
