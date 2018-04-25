import { Account } from './Account';
import { Currency } from './Currency';
import { Location } from './Location';
import { Transaction } from './Transaction';

export class Money {

    protected accounts: Account[] = [];
    protected transactions: Transaction[] = [];
    protected locations: Location[] = [];
    protected currencies: Currency[] = [];

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

}
