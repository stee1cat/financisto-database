import { expect } from 'chai';
import 'mocha';

import { FinancistoDatabase } from '../../src/models/FinancistoDatabase';
import { AbilityCashProvider } from '../../src/providers/ability-cash/AbilityCashProvider';

describe('AbilityCashProvider', function () {
    it('parse', function () {
        let fd: FinancistoDatabase = AbilityCashProvider.parse('');

        expect(fd).to.be.instanceof(FinancistoDatabase);
    });
});
