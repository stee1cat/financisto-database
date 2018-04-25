export class Category {

    private _id: number;
    private _title: string;
    private _left: number;
    private _right: number;
    private _lastLocationId: number;
    private _lastProjectId: number;
    private _sortOrder: number;
    private _type: number;
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

    get left(): number {
        return this._left;
    }

    set left(value: number) {
        this._left = value;
    }

    get right(): number {
        return this._right;
    }

    set right(value: number) {
        this._right = value;
    }

    get lastLocationId(): number {
        return this._lastLocationId;
    }

    set lastLocationId(value: number) {
        this._lastLocationId = value;
    }

    get lastProjectId(): number {
        return this._lastProjectId;
    }

    set lastProjectId(value: number) {
        this._lastProjectId = value;
    }

    get sortOrder(): number {
        return this._sortOrder;
    }

    set sortOrder(value: number) {
        this._sortOrder = value;
    }

    get type(): number {
        return this._type;
    }

    set type(value: number) {
        this._type = value;
    }

    get updatedOn(): Date {
        return this._updatedOn;
    }

    set updatedOn(value: Date) {
        this._updatedOn = value;
    }

}
