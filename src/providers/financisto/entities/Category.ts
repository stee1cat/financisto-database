import { EntityTypes } from '../EntityTypes';
import { toFinancistoEntityString } from '../../../util';
import { INode } from '../../../models/INode';

export class Category implements INode {
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

    public get left(): number {
        return this._left;
    }

    public set left(value: number) {
        this._left = value;
    }

    public get right(): number {
        return this._right;
    }

    public set right(value: number) {
        this._right = value;
    }

    public get lastLocationId(): number {
        return this._lastLocationId;
    }

    public set lastLocationId(value: number) {
        this._lastLocationId = value;
    }

    public get lastProjectId(): number {
        return this._lastProjectId;
    }

    public set lastProjectId(value: number) {
        this._lastProjectId = value;
    }

    public get sortOrder(): number {
        return this._sortOrder;
    }

    public set sortOrder(value: number) {
        this._sortOrder = value;
    }

    public get type(): number {
        return this._type;
    }

    public set type(value: number) {
        this._type = value;
    }

    public get updatedOn(): Date {
        return this._updatedOn;
    }

    public set updatedOn(value: Date) {
        this._updatedOn = value;
    }

    public get children(): Category[] {
        return this._children;
    }

    public set children(value: Category[]) {
        this._children = value;
    }

    public get parentId(): number {
        return this._parentId;
    }

    public set parentId(value: number) {
        this._parentId = value;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    private _id: number;
    private _title: string;
    private _left: number;
    private _right: number;
    private _lastLocationId: number;
    private _lastProjectId: number;
    private _sortOrder: number;
    private _type: number;
    private _updatedOn: Date;
    private _children: Category[] = [];
    private _parentId: number;
    private _isActive: boolean;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Category, [
            ['_id', this.id],
            ['title', this.title],
            ['left', this.left],
            ['right', this.right],
            ['last_location_id', this.lastLocationId],
            ['last_project_id', this.lastProjectId],
            ['sort_order', this.sortOrder],
            ['type', this.type],
            ['updated_on', this.updatedOn],
            ['is_active', this.isActive],
        ]);
    }
}
