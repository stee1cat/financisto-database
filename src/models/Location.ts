export class Location {
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get datetime(): number {
        return this._datetime;
    }

    public set datetime(value: number) {
        this._datetime = value;
    }

    public get accuracy(): number {
        return this._accuracy;
    }

    public set accuracy(value: number) {
        this._accuracy = value;
    }

    public get latitude(): number {
        return this._latitude;
    }

    public set latitude(value: number) {
        this._latitude = value;
    }

    public get longitude(): number {
        return this._longitude;
    }

    public set longitude(value: number) {
        this._longitude = value;
    }

    public get isPayee(): boolean {
        return this._isPayee;
    }

    public set isPayee(value: boolean) {
        this._isPayee = value;
    }

    public get count(): number {
        return this._count;
    }

    public set count(value: number) {
        this._count = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = new Date(value);
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

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
}
