import { Account } from './Account';
import { Location } from './Location';

export class Money {

    protected accounts: Account[] = [];
    protected transactions: any[] = [];
    protected locations: Location[] = [];

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

}
