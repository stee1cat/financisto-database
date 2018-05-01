import { Account } from './Account';
import { Category } from './Category';
import { Currency } from './Currency';
import { CurrencyExchangeRate } from './CurrencyExchangeRate';
import { Location } from './Location';
import { Project } from './Project';
import { Transaction } from './Transaction';

export class FinancistoDatabase {

    protected accounts: Map<number, Account> = new Map<number, Account>();
    protected transactions: Map<number, Transaction> = new Map<number, Transaction>();
    protected locations: Map<number, Location> = new Map<number, Location>();
    protected currencies: Map<number, Currency> = new Map<number, Currency>();
    protected categories: Map<number, Category> = new Map<number, Category>();
    protected currencyExchangeRates: CurrencyExchangeRate[] = [];
    protected projects: Map<number, Project> = new Map<number, Project>();

    public getLocations(): Location[] {
        return Array.from(this.locations.values());
    }

    public addLocation(location: Location) {
        this.locations.set(location.id, location);
    }

    public getLocation(id: number): Location {
        return this.locations.get(id);
    }

    public getAccounts(): Account[] {
        return Array.from(this.accounts.values());
    }

    public addAccount(account: Account) {
        this.accounts.set(account.id, account);
    }

    public getAccount(id: number): Account {
        return this.accounts.get(id);
    }

    public getTransactions(): Transaction[] {
        return Array.from(this.transactions.values());
    }

    public addTransaction(transaction: Transaction) {
        this.transactions.set(transaction.id, transaction);
    }

    public getTransaction(id: number): Transaction {
        return this.transactions.get(id);
    }

    public getCurrencies(): Currency[] {
        return Array.from(this.currencies.values());
    }

    public addCurrency(currency: Currency) {
        this.currencies.set(currency.id, currency);
    }

    public getCurrency(id: number): Currency {
        return this.currencies.get(id);
    }

    public getCategories(): Category[] {
        return Array.from(this.categories.values());
    }

    public addCategory(category: Category) {
        this.categories.set(category.id, category);
    }

    public getCategory(id: number): Category {
        return this.categories.get(id);
    }

    public getCurrencyExchangeRates(): CurrencyExchangeRate[] {
        return this.currencyExchangeRates;
    }

    public addCurrencyExchangeRate(rate: CurrencyExchangeRate) {
        this.currencyExchangeRates.push(rate);
    }

    public getProjects(): Project[] {
        return Array.from(this.projects.values());
    }

    public addProject(project: Project) {
        this.projects.set(project.id, project);
    }

    public getProject(id: number): Project {
        return this.projects.get(id);
    }

}
