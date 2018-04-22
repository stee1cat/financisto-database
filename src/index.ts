import { FinancistoProvider } from './providers/financisto/FinancistoProvider';
import { extract, readFile } from './util';

readFile(`${__dirname}/../test/data/20180422_154154_511.backup`)
    .then(function (file) {
        let data = extract(file);

        FinancistoProvider.parse(data);
    });
