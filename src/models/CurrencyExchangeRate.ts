export class CurrencyExchangeRate {
    public get fromCurrencyId(): number {
        return this._fromCurrencyId;
    }

    public set fromCurrencyId(value: number) {
        this._fromCurrencyId = value;
    }

    public get toCurrencyId(): number {
        return this._toCurrencyId;
    }

    public set toCurrencyId(value: number) {
        this._toCurrencyId = value;
    }

    public get rateDate(): Date {
        return this._rateDate;
    }

    public set rateDate(value: Date) {
        this._rateDate = value;
    }

    public get rate(): number {
        return this._rate;
    }

    public set rate(value: number) {
        this._rate = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    private _fromCurrencyId: number;
    private _toCurrencyId: number;
    private _rateDate: Date;
    private _rate: number;
    private _updatedOn: Date;
}
