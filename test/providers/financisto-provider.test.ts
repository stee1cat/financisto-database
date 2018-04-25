import { expect } from 'chai';
import 'mocha';

import { FinancistoProvider } from '../../src/providers/financisto/FinancistoProvider';
import { Money } from '../../src/models/Money';
import { readFile, extract } from '../../src/util';

describe('FinancistoProvider', function () {
    let filename = `${__dirname}/../data/20180422_154154_511.backup`;

    it('parse', async function () {
        let file = await readFile(filename);
        let data = extract(file);
        let money: Money = FinancistoProvider.parse(data);

        expect(money).to.be.an.instanceof(Money);
        expect(money.getLocations()).to.be.an('array').lengthOf(2);
        expect(money.getAccounts()).to.be.an('array').lengthOf(2);
        expect(money.getTransactions()).to.be.an('array').lengthOf(4);
        expect(money.getCurrencies()).to.be.an('array').lengthOf(2);
        expect(money.getCategories()).to.be.an('array').lengthOf(3);
        expect(money.getCurrencyExchangeRates()).to.be.an('array').lengthOf(2);
    });
});
