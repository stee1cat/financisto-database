import { toFinancistoEntityString } from '../../../util';
import { EntityTypes } from '../EntityTypes';
import { AttributeType } from './AttributeType';

export class Attribute {
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get type(): AttributeType {
        return this._type;
    }

    public set type(value: AttributeType) {
        this._type = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get defaultValue(): string {
        return this._defaultValue;
    }

    public set defaultValue(value: string) {
        this._defaultValue = value;
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(value: boolean) {
        this._isActive = value;
    }

    private _id: number;
    private _type: AttributeType;
    private _title: string;
    private _defaultValue: string;
    private _isActive: boolean;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.Attribute, [
            ['_id', this.id],
            ['type', this.type],
            ['title', this.title],
            ['default_value', this.defaultValue],
            ['is_active', this.isActive],
        ]);
    }
}
