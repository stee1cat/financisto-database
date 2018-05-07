import * as builder from 'xmlbuilder';
import { Category } from '../../models/Category';
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

        let accounts = fd.getAccounts();
        if (accounts.length > 0) {
            let section = root.ele('accounts');

            for (let a of accounts) {
                let account = section.ele('account');
                let currency = fd.getCurrency(a.currencyId);

                account.ele('name', a.title);
                account.ele('init-balance', 0);

                if (currency) {
                    account.ele('currency', prepareCode(currency.name));
                }

                if (!a.isActive) {
                    account.ele('locked');
                }

                if (a.note) {
                    account.ele('comment', a.note);
                }
            }
        }

        let categories = fd.getCategories();
        if (categories.length > 0) {
            let classifiers = root.ele('classifiers');
            let classifier = classifiers.ele('classifier');

            classifier.ele('singular-name', 'Category');
            classifier.ele('plural-name', 'Categories');

            XmlBuilder.walk(categories, classifier.ele('single-tree'));
        }

        return root.end({
            pretty: true,
            indent: ' '.padStart(4)
        });
    }

    private static walk(list: Category[], parent) {
        for (let item of list) {
            let category = parent.ele('category');

            category.att('changed-at', item.updatedOn.toISOString());
            category.ele('name', item.title);

            if (item.children.length) {
                XmlBuilder.walk(item.children, category);
            }
        }
    }

}
