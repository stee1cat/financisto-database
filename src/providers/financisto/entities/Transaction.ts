import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';
import { LocationProvider } from './LocationProvider';

export class Transaction {
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get fromAccountId(): number {
        return this._fromAccountId;
    }

    public set fromAccountId(value: number) {
        this._fromAccountId = value;
    }

    public get toAccountId(): number {
        return this._toAccountId;
    }

    public set toAccountId(value: number) {
        this._toAccountId = value;
    }

    public get categoryId(): number {
        return this._categoryId;
    }

    public set categoryId(value: number) {
        this._categoryId = value;
    }

    public get projectId(): number {
        return this._projectId;
    }

    public set projectId(value: number) {
        this._projectId = value;
    }

    public get locationId(): number {
        return this._locationId;
    }

    public set locationId(value: number) {
        this._locationId = value;
    }

    public get note(): string {
        return (this._note || '').trim();
    }

    public set note(value: string) {
        this._note = value;
    }

    public get fromAmount(): number {
        return this._fromAmount;
    }

    public set fromAmount(value: number) {
        this._fromAmount = value;
    }

    public get toAmount(): number {
        return this._toAmount;
    }

    public set toAmount(value: number) {
        this._toAmount = value;
    }

    public get date(): string {
        const d = this.datetime;
        const month = d.getMonth().toString().padStart(2, '0');
        const date = d.getDate().toString().padStart(2, '0');

        return `${d.getFullYear()}-${month}-${date}`;
    }

    public get provider(): LocationProvider {
        return this._provider;
    }

    public set provider(value: LocationProvider) {
        this._provider = value;
    }

    public get datetime(): Date {
        return this._datetime;
    }

    public set datetime(value: Date) {
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

    public get isTransfer(): boolean {
        return this.fromAccountId !== 0 && this.toAccountId !== 0;
    }

    public get isTemplate(): number {
        return this._isTemplate;
    }

    public set isTemplate(value: number) {
        this._isTemplate = value;
    }

    public get recurrence(): string {
        return this._recurrence;
    }

    public set recurrence(value: string) {
        this._recurrence = value;
    }

    public get templateName(): string {
        return this._templateName;
    }

    public set templateName(value: string) {
        this._templateName = value;
    }

    public get status(): string {
        return this._status;
    }

    public set status(value: string) {
        this._status = value;
    }

    public get attachedPicture(): string {
        return this._attachedPicture;
    }

    public set attachedPicture(value: string) {
        this._attachedPicture = value;
    }

    public get isCcardPayment(): boolean {
        return this._isCcardPayment;
    }

    public set isCcardPayment(value: boolean) {
        this._isCcardPayment = value;
    }

    public get lastRecurrence(): Date {
        return this._lastRecurrence;
    }

    public set lastRecurrence(value: Date) {
        this._lastRecurrence = value;
    }

    public get payeeId(): number {
        return this._payeeId;
    }

    public set payeeId(value: number) {
        this._payeeId = value;
    }

    public get parentId(): number {
        return this._parentId;
    }

    public set parentId(value: number) {
        this._parentId = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    public get originalCurrencyId(): number {
        return this._originalCurrencyId;
    }

    public set originalCurrencyId(value: number) {
        this._originalCurrencyId = value;
    }

    public get originalFromAmount(): number {
        return this._originalFromAmount;
    }

    public set originalFromAmount(value: number) {
        this._originalFromAmount = value;
    }

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
    private _provider: LocationProvider;
    private _accuracy: number;
    private _latitude: number;
    private _longitude: number;
    private _isTemplate: number;
    private _recurrence: string;
    private _templateName: string;
    private _status: string;
    private _attachedPicture: string;
    private _isCcardPayment: boolean;
    private _lastRecurrence: Date;
    private _payeeId: number;
    private _parentId: number;
    private _updatedOn: Date;
    private _originalCurrencyId: number;
    private _originalFromAmount: number;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Transaction, [
            ['_id', this.id],
            ['from_account_id', this.fromAccountId],
            ['to_account_id', this.toAccountId],
            ['category_id', this.categoryId],
            ['project_id', this.projectId],
            ['location_id', this.locationId],
            ['note', this.note ? this.note : undefined],
            ['from_amount', this.fromAmount],
            ['to_amount', this.toAmount],
            ['datetime', this.datetime],
            ['provider', this.provider],
            ['accuracy', this.accuracy],
            ['latitude', this.latitude],
            ['longitude', this.longitude],
            ['is_template', this.isTemplate],
            ['recurrence', this.recurrence],
            ['template_name', this.templateName],
            ['status', this.status],
            ['attached_picture', this.attachedPicture],
            ['is_ccard_payment', this.isCcardPayment],
            ['last_recurrence', this.lastRecurrence],
            ['payee_id', this.payeeId],
            ['parent_id', this.parentId],
            ['updated_on', this.updatedOn],
            ['original_currency_id', this.originalCurrencyId],
            ['original_from_amount', this.originalFromAmount],
        ]);
    }
}
