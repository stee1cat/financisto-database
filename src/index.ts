import { AbilityCashProvider } from './providers/ability-cash/AbilityCashProvider';
import { FinancistoProvider } from './providers/financisto/FinancistoProvider';
import { extract, readFile } from './util';

const NestedSets = require('nested-sets-tree');

const tree = new NestedSets({
    id: 'id',
    lft: 'left',
    rgt: 'right'
});

readFile(`${__dirname}/../test/data/20180503_100107_997.backup`)
    .then(function (file) {
        let data = extract(file);

        let fd = FinancistoProvider.parse(data);
        let xml = AbilityCashProvider.generate(fd);
    });
