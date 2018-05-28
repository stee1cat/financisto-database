type EntityValue = string;

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

    public getNumber(key: string): number {
        return +this.get(key);
    }

    public getDate(key: string): Date {
        return new Date(+this.get(key));
    }

    public getBoolean(key: string): boolean {
        return Boolean(+this.get(key));
    }

}
