export class Currency {

    private _id: number;
    private _name: string;
    private _title: string;
    private _symbol: string;
    private _isDefault: boolean;
    private _decimals: number;
    private _decimalSeparator: string;
    private _groupSeparator: string;
    private _symbolFormat: string;
    private _updatedOn: Date;

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

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get isDefault(): boolean {
        return this._isDefault;
    }

    set isDefault(value: boolean) {
        this._isDefault = value;
    }

    get decimals(): number {
        return this._decimals;
    }

    set decimals(value: number) {
        this._decimals = value;
    }

    get decimalSeparator(): string {
        return this._decimalSeparator;
    }

    set decimalSeparator(value: string) {
        this._decimalSeparator = value;
    }

    get groupSeparator(): string {
        return this._groupSeparator;
    }

    set groupSeparator(value: string) {
        this._groupSeparator = value;
    }

    get symbolFormat(): string {
        return this._symbolFormat;
    }

    set symbolFormat(value: string) {
        this._symbolFormat = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = value;
    }

}
