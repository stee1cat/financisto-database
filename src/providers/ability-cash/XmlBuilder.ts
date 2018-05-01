import * as builder from 'xmlbuilder';

import { FinancistoDatabase } from '../../models/FinancistoDatabase';

export function prepareCode(code: string): string {
    let result = '';

    switch (code.toLowerCase()) {
        case 'rub':
            result = 'rur';
            break;
        default:
            result = code;
    }

    return result.toUpperCase();
}

export class XmlBuilder {

    public static build(fd: FinancistoDatabase): string {
        let root = builder.create('ability-cash')
            .ele('export-options')
                .ele('export-date', (new Date()).toISOString())
                .root();

        let currencies = fd.getCurrencies();
        if (currencies.length > 0) {
            let section = root.ele('currencies');

            for (let c of currencies) {
                let currency = section.ele('currency');

                currency.ele('name', c.title);
                currency.ele('code', prepareCode(c.name));
                currency.ele('precision', c.decimals);
            }
        }

        return root.end({
            pretty: true,
            indent: ' '.padStart(4)
        });
    }

}
