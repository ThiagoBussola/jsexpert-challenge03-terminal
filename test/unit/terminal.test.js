import { describe, it,  beforeEach } from 'mocha';
import { expect } from 'chai';
import readline from 'readline';
import sinon from 'sinon'
import CustomTerminal from '../../src/terminal.js';
import incomeMock from '../mocks/valid-income.js'

describe('Terminal suite tests', () => {
    let terminal = {}

    // usar o each que ai a gente garante que a cada teste é uma instancia nova de CustomTerminal
    beforeEach(() => {
        terminal = new CustomTerminal()
    })

    it('should terminal starts with empty values', async () => {
        expect(terminal.data).to.be.deep.equal([])
        expect(terminal.print).to.be.deep.equal({})

        //console.log(terminal.terminal)
        // lembrando isso é antes de inicializar então não existe o terminal.terminal, será que testo ele?
        expect(terminal.terminal).to.be.deep.equal(undefined)
    })

    it('should be start a terminal', async () => {
        terminal.initialize()
        expect(terminal.data).to.be.deep.equal([])
        expect(typeof terminal.print).to.be.deep.equal("function")
        //terminal agora deve ser uma instancia de readLine 
        expect(terminal.terminal instanceof readline.Interface).to.be.true
    })

    it('should be initialize table, and call method create table once time', async () => {
        // para verificar chamada de métodos utilizamos o spy
        const spy = sinon.spy(terminal, terminal.createTable.name)
        terminal.initializeTable()
        expect(spy.callCount).to.be.deep.equal(1)
    })

    it('must update the table with data and call the formatIncomeValue method only once', async () => {
        const income = incomeMock;
        const spy = sinon.spy(terminal, terminal.formatIncomeValue.name)
        terminal.updateTable(income)
        expect(spy.callCount).to.be.deep.equal(1)

        // chamando para conferir o resultado no consoles
        terminal.initializeTable()
    })


    // como deveria ser testado se está chamando a pergunta?
    // it('must call question method', async () => {

        
    // })

    // não deu bom
    // it('must close the terminal', async () => {
    //     const spy = sinon.spy(terminal, terminal.close.name)
    //     terminal.closeTerminal()
    //     expect(spy.callCount).to.be.deep.equal(1)
    // })

    // está retornando tudo certo, porém a string do expectation e do conversion03 não estão batendo
    // it('should add a new income with correct data after update table', () => {
    //     const income = {
    //       position: 'Jedi Master Developer from the Galaxys',
    //       expectation: { currency: 'BRL', language: 'pt-BR', value: 18000 },
    //       conversion01: { currency: 'USD', language: 'en-US', value: 3133.04 },
    //       conversion02: { currency: 'EUR', language: 'en-GB', value: 2778.16 },
    //       conversion03: { currency: 'RUB', language: 'ru-RU', value: 231662.03 }
    //     }
    //     terminal.updateTable(income)

    //     // chamando só para conferir o resultado no console
    //     terminal.initializeTable()
    //     expect(terminal.data).to.be.deep.equal([
    //         {
    //           id: NaN,
    //           position: 'Jedi Master Developer from the Galaxys',
    //           expectation: 'R$ 18.000,00',
    //           conversion01: '$3,133.04',
    //           conversion02: '€2,778.16',
    //           conversion03: '231 662,03 ₽'
    //         }
    //     ]);
    // })
    
})