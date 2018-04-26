import { Account } from './Account';
import { Category } from './Category';
import { Currency } from './Currency';
import { CurrencyExchangeRate } from './CurrencyExchangeRate';
import { Location } from './Location';
import { Project } from './Project';
import { Transaction } from './Transaction';

export class FinancistoDatabase {

    protected accounts: Account[] = [];
    protected transactions: Transaction[] = [];
    protected locations: Location[] = [];
    protected currencies: Currency[] = [];
    protected categories: Category[] = [];
    protected currencyExchangeRates: CurrencyExchangeRate[] = [];
    protected projects: Project[] = [];

    public getLocations(): Location[] {
        return this.locations;
    }

    public addLocation(location: Location) {
        this.locations.push(location);
    }

    public getAccounts(): Account[] {
        return this.accounts;
    }

    public addAccount(account: Account) {
        this.accounts.push(account);
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }

    public addTransaction(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    public getCurrencies(): Currency[] {
        return this.currencies;
    }

    public addCurrency(currency: Currency) {
        this.currencies.push(currency);
    }

    public getCategories(): Category[] {
        return this.categories;
    }

    public addCategory(category: Category) {
        this.categories.push(category);
    }

    public getCurrencyExchangeRates(): CurrencyExchangeRate[] {
        return this.currencyExchangeRates;
    }

    public addCurrencyExchangeRate(rate: CurrencyExchangeRate) {
        this.currencyExchangeRates.push(rate);
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public addProject(project: Project) {
        this.projects.push(project);
    }

}
