import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';

export class Project {
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

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    private _id: number;
    private _title: string;
    private _isActive: boolean;
    private _updatedOn: Date;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Project, [
            ['_id', this.id],
            ['title', this.title],
            ['is_active', this.isActive],
            ['updated_on', this.updatedOn],
        ]);
    }
}
