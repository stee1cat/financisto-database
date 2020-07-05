import { toFinancistoEntityString } from '../../../util';
import { EntityTypes } from '../EntityTypes';

export class TransactionAttribute {
    public get transactionId(): number {
        return this._transactionId;
    }

    public set transactionId(value: number) {
        this._transactionId = value;
    }

    public get attributeId(): number {
        return this._attributeId;
    }

    public set attributeId(value: number) {
        this._attributeId = value;
    }

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        this._value = value;
    }

    private _transactionId: number;
    private _attributeId: number;
    private _value: string;

    public toString(): string {
        return toFinancistoEntityString(EntityTypes.TransactionAttribute, [
            ['transaction_id', this.transactionId],
            ['attribute_id', this.attributeId],
            ['value', this.value],
        ]);
    }
}
