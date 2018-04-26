import { expect } from 'chai';
import 'mocha';

import { FinancistoProvider } from '../../src/providers/financisto/FinancistoProvider';
import { FinancistoDatabase } from '../../src/models/FinancistoDatabase';
import { readFile, extract } from '../../src/util';

describe('FinancistoProvider', function () {
    let filename = `${__dirname}/../data/20180426_105655_133.backup`;

    it('parse', async function () {
        let file = await readFile(filename);
        let data = extract(file);
        let money: FinancistoDatabase = FinancistoProvider.parse(data);

        expect(money).to.be.an.instanceof(FinancistoDatabase);
        expect(money.getLocations(), 'locations count').to.be.an('array').lengthOf(2);
        expect(money.getAccounts(), 'accounts count').to.be.an('array').lengthOf(2);
        expect(money.getTransactions(), 'transactions count').to.be.an('array').lengthOf(5);
        expect(money.getCurrencies(), 'currencies count').to.be.an('array').lengthOf(2);
        expect(money.getCategories(), 'categories count').to.be.an('array').lengthOf(4);
        expect(money.getCurrencyExchangeRates(), 'rates count').to.be.an('array').lengthOf(2);
        expect(money.getProjects(), 'projects count').to.be.an('array').lengthOf(1);
    });
});
