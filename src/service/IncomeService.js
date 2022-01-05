import IncomeRepository from './../repository/IncomeRepository.js';
import Income from './../entity/Income.js';

class IncomeService {
  constructor({ incomeRepository } = {}) {
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ';') {
    const [position, expectation] = incomeString.split(delimiter);
    
    const income = new Income({
      position,
      expectation: {
        currency: 'BRL',
        language: 'pt-BR',
        value: +expectation
      }
    })
    console.log(income)
    return income;
  }
}

export default IncomeService;
