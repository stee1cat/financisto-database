import { toFinancistoEntityString } from '../../../util';
import { EntityTypes } from '../EntityTypes';

export class Payee {
    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }
    public get lastCategoryId(): number {
        return this._lastCategoryId;
    }

    public set lastCategoryId(value: number) {
        this._lastCategoryId = value;
    }
    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    private _id: number;
    private _title: string;
    private _lastCategoryId: number;
    private _updatedOn: Date;
    private _isActive: boolean;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Payee, [
            ['_id', this.id],
            ['title', this.title],
            ['last_category_id', this.lastCategoryId],
            ['updated_on', this.updatedOn],
            ['is_active', this.isActive],
        ]);
    }
}
