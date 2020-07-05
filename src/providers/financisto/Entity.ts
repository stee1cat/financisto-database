type EntityValue = string;

function toNumber(stringvalue: string): number | undefined {
    const numberValue = Number(stringvalue);

    if (stringvalue !== '' && !isNaN(numberValue)) {
        return numberValue;
    }
}

export class Entity {
    private _fields: {[key: string]: EntityValue} = {};

    constructor(protected _name: string) {}

    public push(key: string, value: EntityValue) {
        this._fields[key] = value;
    }

    public get name(): string {
        return this._name;
    }

    public get(key: string): EntityValue {
        return this._fields[key];
    }

    public getNumber(key: string): number | undefined {
        return toNumber(this.get(key));
    }

    public getArrayOfNumber(key: string): number[] {
        const stringvalue = this.get(key) || '';

        return stringvalue.split(',')
            .map(toNumber);
    }

    public getDate(key: string): Date {
        const numberValue = this.getNumber(key);

        if (numberValue) {
            return new Date(numberValue);
        }

        return new Date(0);
    }

    public getBoolean(key: string): boolean {
        return Boolean(+this.get(key));
    }
}
