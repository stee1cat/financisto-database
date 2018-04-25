export class Transaction {

    private _id: number;
    private _fromAccountId: number;
    private _toAccountId: number;
    private _categoryId: number;
    private _projectId: number;
    private _locationId: number;
    private _note: string;
    private _fromAmount: number;
    private _toAmount: number;
    private _datetime: Date;
    private _accuracy: number;
    private _latitude: number;
    private _longitude: number;
    private _isTemplate: boolean;
    private _status: string;
    private _isCcardPayment: boolean;
    private _lastRecurrence: Date;
    private _payeeId: number;
    private _parentId: number;
    private _updatedOn: Date;
    private _originalCurrencyId: number;
    private _originalFromAmount: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fromAccountId(): number {
        return this._fromAccountId;
    }

    set fromAccountId(value: number) {
        this._fromAccountId = value;
    }

    get toAccountId(): number {
        return this._toAccountId;
    }

    set toAccountId(value: number) {
        this._toAccountId = value;
    }

    get categoryId(): number {
        return this._categoryId;
    }

    set categoryId(value: number) {
        this._categoryId = value;
    }

    get projectId(): number {
        return this._projectId;
    }

    set projectId(value: number) {
        this._projectId = value;
    }

    get locationId(): number {
        return this._locationId;
    }

    set locationId(value: number) {
        this._locationId = value;
    }

    get note(): string {
        return this._note;
    }

    set note(value: string) {
        this._note = value;
    }

    get fromAmount(): number {
        return this._fromAmount;
    }

    set fromAmount(value: number) {
        this._fromAmount = value;
    }

    get toAmount(): number {
        return this._toAmount;
    }

    set toAmount(value: number) {
        this._toAmount = value;
    }

    get datetime(): Date {
        return this._datetime;
    }

    set datetime(value: Date) {
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

    get isTemplate(): boolean {
        return this._isTemplate;
    }

    set isTemplate(value: boolean) {
        this._isTemplate = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get isCcardPayment(): boolean {
        return this._isCcardPayment;
    }

    set isCcardPayment(value: boolean) {
        this._isCcardPayment = value;
    }

    get lastRecurrence(): Date {
        return this._lastRecurrence;
    }

    set lastRecurrence(value: Date) {
        this._lastRecurrence = value;
    }

    get payeeId(): number {
        return this._payeeId;
    }

    set payeeId(value: number) {
        this._payeeId = value;
    }

    get parentId(): number {
        return this._parentId;
    }

    set parentId(value: number) {
        this._parentId = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    get originalCurrencyId(): number {
        return this._originalCurrencyId;
    }

    set originalCurrencyId(value: number) {
        this._originalCurrencyId = value;
    }

    get originalFromAmount(): number {
        return this._originalFromAmount;
    }

    set originalFromAmount(value: number) {
        this._originalFromAmount = value;
    }

}
