import IncomeRepository from './../repository/IncomeRepository.js';
import Income from './../entity/Income.js';
import EmptyString from './../exceptions/emptyString.js'
import InvalidExpectation from './../exceptions/invalidExpectation.js'

class IncomeService {
  constructor({ incomeRepository } = {}) {
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ';') {
    
    const [position, expectation] = incomeString.split(delimiter);
    
    new EmptyString().invalidPosition(position)
    new InvalidExpectation().invalidExpectation(expectation)

    const conversions = await this.incomeRepository.getConversions()

    const income = new Income({
      position,
      expectation: {
        currency: 'BRL',
        language: 'pt-BR',
        value: Number(expectation)
      },
      conversion01: {
        currency: 'USD',
        language: 'en-US',
        value: conversions['USD'] * expectation
      },
      conversion02: {
        currency: 'EUR',
        language: 'en-GB',
        value: conversions['EUR'] * expectation
      },
      conversion03: {
        currency: 'RUB',
        language: 'ru-RU',
        value: conversions['RUB'] * expectation
      }
    })
    return income;
  }
}

export default IncomeService;
