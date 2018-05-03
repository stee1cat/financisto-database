export class Account {

    private _id: number;
    private _title: string;
    private _note: string;
    private _creationDate: Date;
    private _currencyId: number;
    private _totalAmount: number;
    private _type: string;
    private _sortOrder: number;
    private _isActive: boolean;
    private _isIncludeIntoTotals: boolean;
    private _lastCategoryId: number;
    private _lastAccountId: number;
    private _totalLimit: number;
    private _closingDay: number;
    private _paymentDay: number;
    private _lastTransactionDate: Date;
    private _updatedOn: Date;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get note(): string {
        return this._note;
    }

    set note(value: string) {
        this._note = value;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }

    get currencyId(): number {
        return this._currencyId;
    }

    set currencyId(value: number) {
        this._currencyId = value;
    }

    get totalAmount(): number {
        return this._totalAmount;
    }

    set totalAmount(value: number) {
        this._totalAmount = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get sortOrder(): number {
        return this._sortOrder;
    }

    set sortOrder(value: number) {
        this._sortOrder = value;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    get isIncludeIntoTotals(): boolean {
        return this._isIncludeIntoTotals;
    }

    set isIncludeIntoTotals(value: boolean) {
        this._isIncludeIntoTotals = value;
    }

    get lastCategoryId(): number {
        return this._lastCategoryId;
    }

    set lastCategoryId(value: number) {
        this._lastCategoryId = value;
    }

    get lastAccountId(): number {
        return this._lastAccountId;
    }

    set lastAccountId(value: number) {
        this._lastAccountId = value;
    }

    get totalLimit(): number {
        return this._totalLimit;
    }

    set totalLimit(value: number) {
        this._totalLimit = value;
    }

    get closingDay(): number {
        return this._closingDay;
    }

    set closingDay(value: number) {
        this._closingDay = value;
    }

    get paymentDay(): number {
        return this._paymentDay;
    }

    set paymentDay(value: number) {
        this._paymentDay = value;
    }

    get lastTransactionDate(): Date {
        return this._lastTransactionDate;
    }

    set lastTransactionDate(value: Date) {
        this._lastTransactionDate = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = value;
    }

}
