import { expect } from 'chai';
import 'mocha';

import { prepareCurrencyCode } from '../../src/providers/ability-cash/XmlBuilder';

describe('XmlBuilder', function () {
    it('prepareCurrencyCode', async function () {
        expect(prepareCurrencyCode('RUB')).to.be.equal('RUR');
        expect(prepareCurrencyCode('rur')).to.be.equal('RUR');
        expect(prepareCurrencyCode('USD')).to.be.equal('USD');
    });
});
