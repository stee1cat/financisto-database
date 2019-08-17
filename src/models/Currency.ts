export class Currency {
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

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get symbol(): string {
        return this._symbol;
    }

    public set symbol(value: string) {
        this._symbol = value;
    }

    public get isDefault(): boolean {
        return this._isDefault;
    }

    public set isDefault(value: boolean) {
        this._isDefault = value;
    }

    public get decimals(): number {
        return this._decimals;
    }

    public set decimals(value: number) {
        this._decimals = value;
    }

    public get decimalSeparator(): string {
        return this._decimalSeparator;
    }

    public set decimalSeparator(value: string) {
        this._decimalSeparator = value;
    }

    public get groupSeparator(): string {
        return this._groupSeparator;
    }

    public set groupSeparator(value: string) {
        this._groupSeparator = value;
    }

    public get symbolFormat(): string {
        return this._symbolFormat;
    }

    public set symbolFormat(value: string) {
        this._symbolFormat = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

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
}
