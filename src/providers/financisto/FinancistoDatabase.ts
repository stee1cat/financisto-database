import { Account } from './entities/Account';
import { Attribute } from './entities/Attribute';
import { Budget } from './entities/Budget';
import { Category } from './entities/Category';
import { CategoryAttribute } from './entities/CategoryAttribute';
import { Currency } from './entities/Currency';
import { CurrencyExchangeRate } from './entities/CurrencyExchangeRate';
import { Location } from './entities/Location';
import { Payee } from './entities/Payee';
import { Project } from './entities/Project';
import { Transaction } from './entities/Transaction';
import { TransactionAttribute } from './entities/TransactionAttribute';
import { Tree } from '../../models/Tree';

export class FinancistoDatabase {
    protected packageName: string = 'ru.orangesoftware.financisto';
    protected version: number = 1;
    protected versionCode: number = 1;
    protected versionName: string = '1.0.0';
    protected accounts: Map<number, Account> = new Map<number, Account>();
    protected transactions: Map<number, Transaction> = new Map<number, Transaction>();
    protected locations: Map<number, Location> = new Map<number, Location>();
    protected currencies: Map<number, Currency> = new Map<number, Currency>();
    protected categories: Map<number, Category> = new Map<number, Category>();
    protected currencyExchangeRates: CurrencyExchangeRate[] = [];
    protected projects: Map<number, Project> = new Map<number, Project>();
    protected payees: Map<number, Payee> = new Map<number, Payee>();
    protected budgets: Map<number, Budget> = new Map<number, Budget>();
    protected attributes: Map<number, Attribute> = new Map<number, Attribute>();
    protected categoryAttributes: Set<CategoryAttribute> = new Set<CategoryAttribute>();
    protected transactionAttributes: Set<TransactionAttribute> = new Set<TransactionAttribute>();
    protected treeOfCategories: Tree<Category>;
    protected treeOfCategoriesIsInvalidated: boolean = false;

    public setPackage(packageName: string) {
        this.packageName = packageName;
    }

    public getPackage(): string {
        return this.packageName;
    }

    public setVersion(version: number) {
        this.version = version;
    }

    public getVersion(): number {
        return this.version;
    }

    public setVersionCode(versionCode: number) {
        this.versionCode = versionCode;
    }

    public getVersionCode(): number {
        return this.versionCode;
    }

    public setVersionName(versionName: string) {
        this.versionName = versionName;
    }

    public getVersionName(): string {
        return this.versionName;
    }

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

    public getTreeOfCategories(): Tree<Category> {
        if (this.treeOfCategoriesIsInvalidated || !this.treeOfCategories) {
            this.treeOfCategoriesIsInvalidated = false;
            this.treeOfCategories = new Tree(this.getCategories());
        }

        return this.treeOfCategories;
    }

    public addCategory(category: Category) {
        this.treeOfCategoriesIsInvalidated = true;
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

    public getPayees(): Payee[] {
        return Array.from(this.payees.values());
    }

    public addPayee(payee: Payee) {
        this.payees.set(payee.id, payee);
    }

    public getPayee(id: number): Payee {
        return this.payees.get(id);
    }

    public getBudgets(): Budget[] {
        return Array.from(this.budgets.values());
    }

    public addBudget(budget: Budget) {
        this.budgets.set(budget.id, budget);
    }

    public getBudget(id: number): Budget {
        return this.budgets.get(id);
    }

    public getAttributes(): Attribute[] {
        return Array.from(this.attributes.values());
    }

    public addAttribute(attribute: Attribute) {
        this.attributes.set(attribute.id, attribute);
    }

    public getAttribute(id: number): Attribute {
        return this.attributes.get(id);
    }

    public getCategoryAttributes(): CategoryAttribute[] {
        return Array.from(this.categoryAttributes.values());
    }

    public addCategoryAttribute(categoryAttribute: CategoryAttribute) {
        this.categoryAttributes.add(categoryAttribute);
    }

    public getTransactionAttributes(): TransactionAttribute[] {
        return Array.from(this.transactionAttributes.values());
    }

    public addTransactionAttribute(transactionAttribute: TransactionAttribute) {
        this.transactionAttributes.add(transactionAttribute);
    }
}
