export class Cache<K, V> {
    protected items: Map<K, V> = new Map();

    public has(key: K): boolean {
        return this.items.has(key);
    }

    public set(key: K, value: V): void {
        this.items.set(key, value);
    }

    public get(key: K): V {
        return this.items.get(key);
    }
}
