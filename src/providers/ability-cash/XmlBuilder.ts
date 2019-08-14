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
        const root = builder.create('ability-cash')
            .ele('export-options')
                .ele('export-date', (new Date()).toISOString())
                .root();
        const classifiers = root.ele('classifiers');

        const currencies = fd.getCurrencies();
        if (currencies.length > 0) {
            const section = root.ele('currencies');

            for (const c of currencies) {
                const currency = section.ele('currency');

                currency.ele('name', c.title);
                currency.ele('code', prepareCode(c.name));
                currency.ele('precision', c.decimals);
            }
        }

        const accounts = fd.getAccounts();
        if (accounts.length > 0) {
            const section = root.ele('accounts');

            for (const a of accounts) {
                const account = section.ele('account');
                const currency = fd.getCurrency(a.currencyId);

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

        const categories = fd.getCategories();
        if (categories.length > 0) {
            const classifier = classifiers.ele('classifier');

            classifier.ele('singular-name', 'Category');
            classifier.ele('plural-name', 'Categories');

            XmlBuilder.walk(categories, classifier.ele('single-tree'));
        }

        const projects = fd.getProjects();
        if (projects.length > 0) {
            const classifier = classifiers.ele('classifier');

            classifier.ele('singular-name', 'Project');
            classifier.ele('plural-name', 'Projects');

            const tree = classifier.ele('single-tree');
            for (const project of projects) {
                const category = tree.ele('category');

                category.att('changed-at', project.updatedOn.toISOString());
                category.ele('name', project.title);
            }
        }

        const locations = fd.getLocations();
        if (locations.length > 0) {
            const classifier = classifiers.ele('classifier');

            classifier.ele('singular-name', 'Location');
            classifier.ele('plural-name', 'Locations');

            const tree = classifier.ele('single-tree');
            for (const location of locations) {
                const category = tree.ele('category');

                category.att('changed-at', location.updatedOn.toISOString());
                category.ele('name', location.title);
            }
        }

        return root.end({
            pretty: true,
            indent: ' '.padStart(4),
        });
    }

    private static walk(list: Category[], parent) {
        for (const item of list) {
            const category = parent.ele('category');

            category.att('changed-at', item.updatedOn.toISOString());
            category.ele('name', item.title);

            if (item.children.length) {
                XmlBuilder.walk(item.children, category);
            }
        }
    }
}
