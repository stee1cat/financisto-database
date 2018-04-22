export class Location {

    private _id: number;
    private _name: string;
    private _datetime: number;
    private _accuracy: number;
    private _latitude: number;
    private _longitude: number;
    private _isPayee: boolean;
    private _count: number;
    private _updatedOn: Date;
    private _title: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get datetime(): number {
        return this._datetime;
    }

    set datetime(value: number) {
        this._datetime = value;
    }

    get accuracy(): number {
        return this._accuracy;
    }

    set accuracy(value: number) {
        this._accuracy = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

    get isPayee(): boolean {
        return this._isPayee;
    }

    set isPayee(value: boolean) {
        this._isPayee = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = new Date(value);
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}
