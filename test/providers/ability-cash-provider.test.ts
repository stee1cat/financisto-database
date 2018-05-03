import { expect } from 'chai';
import 'mocha';

import { FinancistoDatabase } from '../../src/models/FinancistoDatabase';
import { AbilityCashProvider } from '../../src/providers/ability-cash/AbilityCashProvider';
import { FinancistoProvider } from '../../src/providers/financisto/FinancistoProvider';
import { extract, readFile } from '../../src/util';

function removeExportDate(xml: string): string {
    return xml.replace(/<export-date>[^<]*<\/export-date>/i, '');
}

describe('AbilityCashProvider', function () {
    it('parse', function () {
        let fd: FinancistoDatabase = AbilityCashProvider.parse('');

        expect(fd).to.be.instanceof(FinancistoDatabase);
    });

    it('generate', async function () {
        let fSource = extract(await readFile(`${__dirname}/../data/20180503_100107_997.backup`));
        let fd: FinancistoDatabase = FinancistoProvider.parse(fSource);

        let aSource = await readFile(`${__dirname}/../data/20180503_100107_997.xml`);
        let xml = AbilityCashProvider.generate(fd);

        expect(removeExportDate(xml)).to.be.equal(removeExportDate(aSource.toString()));
    });
});
