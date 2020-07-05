import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';

export class Budget {
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

    public get categoryId(): number[] {
        return this._categoryId;
    }

    public set categoryId(value: number[]) {
        this._categoryId = value;
    }

    public get currencyId(): number {
        return this._currencyId;
    }

    public set currencyId(value: number) {
        this._currencyId = value;
    }

    public get amount(): number {
        return this._amount;
    }

    public set amount(value: number) {
        this._amount = value;
    }

    public get includeSubcategories(): boolean {
        return this._includeSubcategories;
    }

    public set includeSubcategories(value: boolean) {
        this._includeSubcategories = value;
    }

    public get startDate(): Date {
        return this._startDate;
    }

    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get endDate(): Date {
        return this._endDate;
    }

    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get recur(): string {
        return this._recur;
    }

    public set recur(value: string) {
        this._recur = value;
    }

    public get recurNum(): number {
        return this._recurNum;
    }

    public set recurNum(value: number) {
        this._recurNum = value;
    }

    public get isCurrent(): boolean {
        return this._isCurrent;
    }

    public set isCurrent(value: boolean) {
        this._isCurrent = value;
    }

    public get parentBudgetId(): number {
        return this._parentBudgetId;
    }

    public set parentBudgetId(value: number) {
        this._parentBudgetId = value;
    }

    public get projectId(): number[] {
        return this._projectId;
    }

    public set projectId(value: number[]) {
        this._projectId = value;
    }

    public get expanded(): boolean {
        return this._expanded;
    }

    public set expanded(value: boolean) {
        this._expanded = value;
    }

    public get includeCredit(): boolean {
        return this._includeCredit;
    }

    public set includeCredit(value: boolean) {
        this._includeCredit = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    public get budgetCurrencyId(): number {
        return this._budgetCurrencyId;
    }

    public set budgetCurrencyId(value: number) {
        this._budgetCurrencyId = value;
    }

    private _id: number;
    private _title: string;
    private _categoryId: number[];
    private _currencyId: number;
    private _amount: number;
    private _includeSubcategories: boolean;
    private _startDate: Date;
    private _endDate: Date;
    private _recur: string;
    private _recurNum: number;
    private _isCurrent: boolean;
    private _parentBudgetId: number;
    private _projectId: number[];
    private _expanded: boolean;
    private _includeCredit: boolean;
    private _updatedOn: Date;
    private _budgetCurrencyId: number;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Budget, [
            ['_id', this.id],
            ['title', this.title],
            ['category_id', this.categoryId],
            ['currency_id', this.currencyId],
            ['amount', this.amount],
            ['include_subcategories', this.includeSubcategories],
            ['start_date', this.startDate],
            ['end_date', this.endDate],
            ['recur', this.recur],
            ['recur_num', this.recurNum],
            ['is_current', this.isCurrent],
            ['parent_budget_id', this.parentBudgetId],
            ['project_id', this.projectId],
            ['expanded', this.expanded],
            ['include_credit', this.includeCredit],
            ['updated_on', this.updatedOn],
            ['budget_currency_id', this.budgetCurrencyId],
        ], ['category_id', 'project_id']);
    }
}
