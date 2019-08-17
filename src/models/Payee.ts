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

    private _id: number;
    private _title: string;
    private _lastCategoryId: number;
    private _updatedOn: Date;
}
