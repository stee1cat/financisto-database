import { Location } from './Location';

export class Money {

    protected accounts: any[] = [];
    protected transactions: any[] = [];
    protected locations: Location[] = [];

    public getLocations(): Location[] {
        return this.locations;
    }

    public addLocation(location: Location) {
        this.locations.push(location);
    }

}
