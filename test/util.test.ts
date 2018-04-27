import { expect } from 'chai';
import 'mocha';

import { readFile, extract } from '../src/util';

describe('util', function () {
    let filename = `${__dirname}/data/20180426_105655_133.backup`;

    it('readFile', async function () {
        let file = await readFile(filename);

        expect(file.byteLength).to.be.equal(1021);
    });

    it('extract', async function () {
        let file = await readFile(filename);
        let data = extract(file);

        expect(data).to.have.string('PACKAGE:ru.orangesoftware.financisto');
    });
});
