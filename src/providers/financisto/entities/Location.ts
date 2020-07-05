import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';
import { LocationProvider } from './LocationProvider';

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

    public get provider(): LocationProvider {
        return this._provider;
    }

    public set provider(value: LocationProvider) {
        this._provider = value;
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

    public get resolvedAddress(): string {
        return this._resolvedAddress;
    }

    public set resolvedAddress(value: string) {
        this._resolvedAddress = value;
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

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    private _id: number;
    private _name: string;
    private _datetime: number;
    private _provider: LocationProvider;
    private _accuracy: number;
    private _latitude: number;
    private _longitude: number;
    private _isPayee: boolean;
    private _resolvedAddress: string;
    private _count: number;
    private _updatedOn: Date;
    private _title: string;
    private _isActive: boolean;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Location, [
            ['_id', this.id],
            ['name', this.name],
            ['datetime', this.datetime],
            ['provider', this.provider],
            ['accuracy', this.accuracy],
            ['latitude', this.latitude],
            ['longitude', this.longitude],
            ['is_payee', this.isPayee],
            ['resolved_address', this.resolvedAddress],
            ['count', this.count],
            ['updated_on', this.updatedOn],
            ['title', this.title],
            ['is_active', this.isActive],
        ]);
    }
}
