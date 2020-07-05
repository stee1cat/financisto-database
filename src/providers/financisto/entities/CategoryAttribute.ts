import { toFinancistoEntityString } from '../../../util';
import { EntityTypes } from '../EntityTypes';

export class CategoryAttribute {
    public get categoryId(): number {
        return this._categoryId;
    }

    public set categoryId(value: number) {
        this._categoryId = value;
    }

    public get attributeId(): number {
        return this._attributeId;
    }

    public set attributeId(value: number) {
        this._attributeId = value;
    }

    private _categoryId: number;
    private _attributeId: number;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.CategoryAttribute, [
            ['category_id', this.categoryId],
            ['attribute_id', this.attributeId],
        ]);
    }
}
