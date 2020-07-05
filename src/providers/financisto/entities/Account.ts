import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';
import { AccountType } from './AccountType';

export class Account {
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get note(): string {
        return this._note;
    }

    public set note(value: string) {
        this._note = value;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public set creationDate(value: Date) {
        this._creationDate = value;
    }

    public get currencyId(): number {
        return this._currencyId;
    }

    public set currencyId(value: number) {
        this._currencyId = value;
    }

    public get totalAmount(): number {
        return this._totalAmount;
    }

    public set totalAmount(value: number) {
        this._totalAmount = value;
    }

    public get type(): AccountType {
        return this._type;
    }

    public set type(value: AccountType) {
        this._type = value;
    }

    public get issuer(): string {
        return this._issuer;
    }

    public set issuer(value: string) {
        this._issuer = value;
    }

    public get number(): number {
        return this._number;
    }

    public set number(value: number) {
        this._number = value;
    }

    public get sortOrder(): number {
        return this._sortOrder;
    }

    public set sortOrder(value: number) {
        this._sortOrder = value;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    public get isIncludeIntoTotals(): boolean {
        return this._isIncludeIntoTotals;
    }

    public set isIncludeIntoTotals(value: boolean) {
        this._isIncludeIntoTotals = value;
    }

    public get lastCategoryId(): number {
        return this._lastCategoryId;
    }

    public set lastCategoryId(value: number) {
        this._lastCategoryId = value;
    }

    public get lastAccountId(): number {
        return this._lastAccountId;
    }

    public set lastAccountId(value: number) {
        this._lastAccountId = value;
    }

    public get totalLimit(): number {
        return this._totalLimit;
    }

    public set totalLimit(value: number) {
        this._totalLimit = value;
    }

    public get cardIssuer(): string {
        return this._cardIssuer;
    }

    public set cardIssuer(value: string) {
        this._cardIssuer = value;
    }

    public get closingDay(): number {
        return this._closingDay;
    }

    public set closingDay(value: number) {
        this._closingDay = value;
    }

    public get paymentDay(): number {
        return this._paymentDay;
    }

    public set paymentDay(value: number) {
        this._paymentDay = value;
    }

    public get lastTransactionDate(): Date {
        return this._lastTransactionDate;
    }

    public set lastTransactionDate(value: Date) {
        this._lastTransactionDate = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    private _id: number;
    private _title: string;
    private _note: string;
    private _creationDate: Date;
    private _currencyId: number;
    private _totalAmount: number;
    private _type: AccountType;
    private _issuer: string;
    private _number: number;
    private _sortOrder: number;
    private _isActive: boolean;
    private _isIncludeIntoTotals: boolean;
    private _lastCategoryId: number;
    private _lastAccountId: number;
    private _totalLimit: number;
    private _cardIssuer: string;
    private _closingDay: number;
    private _paymentDay: number;
    private _lastTransactionDate: Date;
    private _updatedOn: Date;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Account, [
            ['_id', this.id],
            ['title', this.title],
            ['creation_date', this.creationDate],
            ['currency_id', this.currencyId],
            ['total_amount', this.totalAmount],
            ['type', this.type],
            ['issuer', this.issuer],
            ['number', this.number],
            ['sort_order', this.sortOrder],
            ['is_active', this.isActive],
            ['is_include_into_totals', this.isIncludeIntoTotals],
            ['last_category_id', this.lastCategoryId],
            ['last_account_id', this.lastAccountId],
            ['total_limit', this.totalLimit],
            ['card_issuer', this.cardIssuer],
            ['closing_day', this.closingDay],
            ['payment_day', this.paymentDay],
            ['note', this.note],
            ['last_transaction_date', this.lastTransactionDate],
            ['updated_on', this.updatedOn],
        ]);
    }
}
