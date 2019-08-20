import * as builder from 'xmlbuilder';
import { XMLElement } from 'xmlbuilder';
import * as moment from 'moment';
import { Category } from '../../models/Category';
import { Currency } from '../../models/Currency';
import { FinancistoDatabase } from '../../models/FinancistoDatabase';
import { Classifiers } from '../../models/Classifiers';
import { Location } from '../../models/Location';
import { Project } from '../../models/Project';
import { Payee } from '../../models/Payee';
import { Transaction } from '../../models/Transaction';

interface IClassifierNames {
    singular: Classifiers;
    plural: Classifiers;
}

function addChangedAtAttribute(element: XMLElement, date: Date): void {
    if (date.getMilliseconds()) {
        element.att('changed-at', date.toISOString());
    }
}

export function prepareCurrencyCode(code: string): string {
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

function createOneLevelClassifier(classifiers: XMLElement, items: Location[] | Project[] | Payee[], names: IClassifierNames) {
    const classifier = classifiers.ele('classifier');

    classifier.ele('singular-name', names.singular);
    classifier.ele('plural-name', names.plural);

    const tree = classifier.ele('single-tree');
    const root = tree.ele('category');

    root.ele('name', names.singular);
    for (const item of items) {
        const node = root.ele('category');

        addChangedAtAttribute(node, item.updatedOn);
        node.ele('name', item.title);
    }
}

export class XmlBuilder {
    constructor(private db: FinancistoDatabase) {}

    public build(): string {
        const root = builder.create('ability-cash')
            .ele('export-options')
                .ele('export-date', (new Date()).toISOString())
                .root();
        const classifiers = root.ele('classifiers');

        this.addCurrencies(root);
        this.addAccounts(root);
        this.addCategories(classifiers);
        this.addPayees(classifiers);
        this.addProjects(classifiers);
        this.addLocations(classifiers);
        this.addTransactions(root);
        this.addCurrencyExchangeRates(root);

        return root.end({
            pretty: true,
            indent: ' '.padStart(4),
        });
    }

    private addTransactions(root: XMLElement): void {
        const transactions = this.db.getTransactions();
        if (transactions.length > 0) {
            const list = root.ele('transactions');

            for (const transaction of transactions) {
                // skip children transactions
                if (!transaction.parentId) {
                    const item = list.ele('transaction');

                    item.ele('date', transaction.datetime.toISOString());

                    if (transaction.isTransfer) {
                        const transfer = item.ele('transfer');

                        this.fillTransfer(transfer, transaction);
                    } else {
                        addChangedAtAttribute(item, transaction.updatedOn);

                        let incomeOrExpense: XMLElement;
                        if (transaction.fromAmount > 0) {
                            incomeOrExpense = item.ele('income');
                        } else {
                            incomeOrExpense = item.ele('expense');
                        }

                        this.fillIncomeOrExpense(transaction, incomeOrExpense);
                    }

                    if (transaction.note) {
                        item.ele('comment', transaction.note);
                    }
                }
            }
        }
    }

    private fillIncomeOrExpense(transaction: Transaction, incomeOrExpense: XMLElement) {
        addChangedAtAttribute(incomeOrExpense, transaction.updatedOn);

        incomeOrExpense.ele(`${incomeOrExpense.name}-amount`, transaction.fromAmount / 100);

        if (transaction.fromAccountId) {
            const accountElement = incomeOrExpense.ele(`${incomeOrExpense.name}-account`);
            const account = this.db.getAccount(transaction.fromAccountId);
            const accountCurrency = this.db.getCurrency(account.currencyId);

            accountElement.ele('name', account.title);
            accountElement.ele('currency', prepareCurrencyCode(accountCurrency.name));
        }

        if (transaction.categoryId) {
            this.addCategoryPathXMLElement(incomeOrExpense, transaction.categoryId);
        }

        if (transaction.payeeId) {
            const root = incomeOrExpense.ele('category');
            root.att('classifier', Classifiers.Payee);
            root.ele('name', Classifiers.Payee);

            const category = root.ele('category');
            category.ele('name', this.db.getPayee(transaction.payeeId).title);
        }

        if (transaction.status) {
            incomeOrExpense.ele('executed');
        }
    }

    private fillTransfer(transfer: XMLElement, transaction: Transaction) {
        transfer.ele('expense-amount', transaction.fromAmount / 100);
        transfer.ele('income-amount', transaction.toAmount / 100);

        if (transaction.fromAccountId) {
            const expenseAccount = transfer.ele('expense-account');
            const account = this.db.getAccount(transaction.fromAccountId);
            const accountCurrency = this.db.getCurrency(account.currencyId);

            expenseAccount.ele('name', account.title);
            expenseAccount.ele('currency', prepareCurrencyCode(accountCurrency.name));
        }

        if (transaction.toAccountId) {
            const incomeAccount = transfer.ele('income-account');
            const account = this.db.getAccount(transaction.toAccountId);
            const accountCurrency = this.db.getCurrency(account.currencyId);

            incomeAccount.ele('name', account.title);
            incomeAccount.ele('currency', prepareCurrencyCode(accountCurrency.name));
        }

        if (transaction.status) {
            transfer.ele('executed');
        }
    }

    private addCurrencies(root: XMLElement): void {
        const currencies = this.db.getCurrencies();
        if (currencies.length > 0) {
            const section = root.ele('currencies');

            for (const c of currencies) {
                const currency = section.ele('currency');

                currency.ele('name', c.title);
                currency.ele('code', prepareCurrencyCode(c.name));
                currency.ele('precision', c.decimals);
            }
        }
    }

    private addAccounts(root: XMLElement): void {
        const accounts = this.db.getAccounts();
        if (accounts.length > 0) {
            const section = root.ele('accounts');

            for (const a of accounts) {
                const account = section.ele('account');
                const currency = this.db.getCurrency(a.currencyId);

                addChangedAtAttribute(account, a.updatedOn);
                account.ele('name', a.title);
                account.ele('init-balance', 0);

                if (currency) {
                    account.ele('currency', prepareCurrencyCode(currency.name));
                }

                if (!a.isActive) {
                    account.ele('locked');
                }

                if (a.note) {
                    account.ele('comment', a.note);
                }
            }
        }
    }

    private addCategories(classifiers: XMLElement): void {
        const categories = this.db.getTreeOfCategories().getTree();
        if (categories.length > 0) {
            const classifier = classifiers.ele('classifier');

            classifier.ele('singular-name', Classifiers.Category);
            classifier.ele('plural-name', Classifiers.CategoryPlural);

            const tree = classifier.ele('single-tree');
            const root = tree.ele('category');

            root.ele('name', Classifiers.Category);

            this.walk(categories, root);
        }
    }

    private addPayees(classifiers: XMLElement): void {
        const payees = this.db.getPayees();
        if (payees.length > 0) {
            createOneLevelClassifier(classifiers, payees, {
                singular: Classifiers.Payee,
                plural: Classifiers.PayeePlural,
            });
        }
    }

    private addProjects(classifiers: XMLElement): void {
        const projects = this.db.getProjects();
        if (projects.length > 0) {
            createOneLevelClassifier(classifiers, projects, {
                singular: Classifiers.Project,
                plural: Classifiers.ProjectPlural,
            });
        }
    }

    private addLocations(classifiers: XMLElement): void {
        const locations = this.db.getLocations();
        if (locations.length > 0) {
            createOneLevelClassifier(classifiers, locations, {
                singular: Classifiers.Location,
                plural: Classifiers.LocationPlural,
            });
        }
    }

    private addCategoryPathXMLElement(root: XMLElement, categoryId: number) {
        const tree = this.db.getTreeOfCategories();
        const path: Category[] = tree.findPath(categoryId);

        if (path.length) {
            const categoryRoot = root.ele('category');
            categoryRoot.att('classifier', Classifiers.Category);
            categoryRoot.ele('name', Classifiers.Category);

            let categoryElement = categoryRoot.ele('category');
            for (let nodeIdx = 0; nodeIdx < path.length; nodeIdx += 1) {
                const category = path[nodeIdx];
                const isLast = nodeIdx === path.length - 1;

                categoryElement.ele('name', category.title);

                if (!isLast) {
                    categoryElement = categoryElement.ele('category');
                }
            }
        }
    }

    private walk(list: Category[], parent: XMLElement): void {
        for (const item of list) {
            const category = parent.ele('category');

            addChangedAtAttribute(category, item.updatedOn);
            category.ele('name', item.title);

            if (item.children.length) {
                this.walk(item.children, category);
            }
        }
    }

    private addCurrencyExchangeRates(root: XMLElement): void {
        const ratesRoot = root.ele('rates');
        const rates = this.db.getCurrencyExchangeRates();
        const uniquePairs: string[] = [];

        for (const rate of rates) {
            const fromCurrency: Currency = this.db.getCurrency(rate.fromCurrencyId);
            const from: string = prepareCurrencyCode(fromCurrency.name);
            const toCurrency: Currency = this.db.getCurrency(rate.toCurrencyId);
            const to: string = prepareCurrencyCode(toCurrency.name);
            const date = moment(rate.rateDate).format('YYYY-MM-DD');

            const pair = [from, to];
            pair.sort();
            const key: string = `${pair.join('_')}_${date}`;

            if (uniquePairs.indexOf(key) === - 1) {
                const rateElement = ratesRoot.ele('rate');
                rateElement.ele('date', date);
                rateElement.ele('currency-1', from);
                rateElement.ele('currency-2', to);
                rateElement.ele('amount-1', rate.rate > 1 ? (1 / rate.rate).toPrecision(5) : 1);
                rateElement.ele('amount-2', rate.rate > 1 ? 1 : rate.rate);

                uniquePairs.push(key);
            }
        }
    }
}
