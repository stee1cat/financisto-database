import { cloneObject, createTree } from '../util';
import { Cache } from './Cache';
import { INode } from './INode';

export class Tree<T extends INode> {
    protected tree: T[];
    protected nodes: T[];
    protected cache: Cache<number, T[]> = new Cache();

    constructor(protected entities: T[]) {
        this.tree = this.makeTree();
        this.nodes = this.makeFlatten(this.tree);
    }

    public getTree(): T[] {
        return this.tree;
    }

    public getNodes(): T[] {
        return this.nodes;
    }

    public findPath(nodeId: number): T[] {
        if (this.cache.has(nodeId)) {
            return this.cache.get(nodeId);
        }

        const findNodeId = nodeId;
        const nodes: T[] = [];

        while (nodeId) {
            let nodeFinded = false;

            for (const node of this.nodes) {
                if (nodeId === node.id) {
                    nodes.push(node);

                    nodeId = node.parentId;
                    nodeFinded = true;
                }
            }

            if (!nodeFinded) {
                nodeId = 0;
            }
        }

        const path = nodes.slice().reverse();

        this.cache.set(findNodeId, path);

        return path;
    }

    protected makeFlatten(nodes: T[]): T[] {
        let result = [];

        for (const node of nodes) {
            result.push(cloneObject(node));

            if (node.children && node.children.length) {
                result = result.concat(this.makeFlatten(node.children as T[]));
            }
        }

        return result;
    }

    protected makeTree(): T[] {
        const items = this.entities.slice();

        items.sort((a, b) => a.left - b.left);

        return createTree(items) as T[];
    }
}
