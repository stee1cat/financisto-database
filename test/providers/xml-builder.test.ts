import { expect } from 'chai';
import 'mocha';

import { prepareCode } from '../../src/providers/ability-cash/XmlBuilder';

describe('XmlBuilder', function () {
    it('prepareCode', async function () {
        expect(prepareCode('RUB')).to.be.equal('RUR');
        expect(prepareCode('rur')).to.be.equal('RUR');
        expect(prepareCode('USD')).to.be.equal('USD');
    });
});
