export class CurrencyExchangeRate {

    private _fromCurrencyId: number;
    private _toCurrencyId: number;
    private _rateDate: Date;
    private _rate: number;
    private _updatedOn: Date;

    get fromCurrencyId(): number {
        return this._fromCurrencyId;
    }

    set fromCurrencyId(value: number) {
        this._fromCurrencyId = value;
    }

    get toCurrencyId(): number {
        return this._toCurrencyId;
    }

    set toCurrencyId(value: number) {
        this._toCurrencyId = value;
    }

    get rateDate(): Date {
        return this._rateDate;
    }

    set rateDate(value: Date) {
        this._rateDate = value;
    }

    get rate(): number {
        return this._rate;
    }

    set rate(value: number) {
        this._rate = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = value;
    }

}
