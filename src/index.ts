import { FinancistoProvider } from './providers/financisto/FinancistoProvider';
import { extract, readFile } from './util';

readFile(`${__dirname}/../test/data/20180426_105655_133.backup`)
    .then(function (file) {
        let data = extract(file);

        FinancistoProvider.parse(data);
    });
