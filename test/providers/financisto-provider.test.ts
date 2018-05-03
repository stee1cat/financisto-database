import { expect } from 'chai';
import 'mocha';

import { FinancistoProvider } from '../../src/providers/financisto/FinancistoProvider';
import { FinancistoDatabase } from '../../src/models/FinancistoDatabase';
import { readFile, extract } from '../../src/util';

describe('FinancistoProvider', function () {
    let filename = `${__dirname}/../data/20180503_100107_997.backup`;

    it('parse', async function () {
        let file = await readFile(filename);
        let data = extract(file);
        let fd: FinancistoDatabase = FinancistoProvider.parse(data);

        expect(fd).to.be.an.instanceof(FinancistoDatabase);
        expect(fd.getLocations(), 'locations count').to.be.an('array').lengthOf(2);
        expect(fd.getAccounts(), 'accounts count').to.be.an('array').lengthOf(2);
        expect(fd.getTransactions(), 'transactions count').to.be.an('array').lengthOf(5);
        expect(fd.getCurrencies(), 'currencies count').to.be.an('array').lengthOf(2);
        expect(fd.getCategories(), 'categories count').to.be.an('array').lengthOf(4);
        expect(fd.getCurrencyExchangeRates(), 'rates count').to.be.an('array').lengthOf(2);
        expect(fd.getProjects(), 'projects count').to.be.an('array').lengthOf(1);
    });
});
