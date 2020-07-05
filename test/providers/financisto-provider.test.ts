import { expect } from 'chai';
import 'mocha';

import { FinancistoProvider } from '../../src/providers/financisto/FinancistoProvider';
import { FinancistoDatabase } from '../../src/providers/financisto/FinancistoDatabase';
import { readFile, extract } from '../../src/util';

describe('FinancistoProvider', function () {
    const filename = `${__dirname}/../data/20180503_100107_997.backup`;

    it('parse', async function () {
        const file = await readFile(filename);
        const data = extract(file);
        const fd: FinancistoDatabase = FinancistoProvider.parse(data);

        expect(fd).to.be.an.instanceof(FinancistoDatabase);
        expect(fd.getLocations(), 'locations count').to.be.an('array').lengthOf(2);
        expect(fd.getAccounts(), 'accounts count').to.be.an('array').lengthOf(2);
        expect(fd.getTransactions(), 'transactions count').to.be.an('array').lengthOf(6);
        expect(fd.getCurrencies(), 'currencies count').to.be.an('array').lengthOf(2);

        const categories = fd.getTreeOfCategories().getTree();
        expect(categories, 'categories count').to.be.an('array').lengthOf(4);
        expect(categories[0].children, 'subcategories count').to.be.an('array').lengthOf(1);

        expect(fd.getCurrencyExchangeRates(), 'rates count').to.be.an('array').lengthOf(2);
        expect(fd.getProjects(), 'projects count').to.be.an('array').lengthOf(1);
    });

    it('generate', async function () {
        const file = await readFile(filename);
        const data = extract(file);
        const fd: FinancistoDatabase = FinancistoProvider.parse(data);

        expect(FinancistoProvider.generate(fd)).to.be.equal(data);
    });
});
