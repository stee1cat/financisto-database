import * as fs from 'fs';
import { promisify } from 'util';
import * as pako from 'pako';
import { INode } from './models/INode';
import { EntityTypes } from './providers/financisto/EntityTypes';
import { Tags } from './providers/financisto/Tags';

export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);

export function extract(data: Buffer): string {
    return pako.inflate(data, {
        to: 'string',
    });
}

export function createTree(nodes: INode[], left = -1, right = Number.MAX_SAFE_INTEGER, parentId = null): INode[] {
    const tree: INode[] = [];

    for (const node of nodes) {
        if (node.left > left && node.right < right) {
            const n = cloneObject(node);

            n.parentId = parentId;
            n.children = createTree(nodes, node.left, node.right, n.id);
            tree.push(n);
            left = node.right;
        }
    }

    return tree;
}

type EntityValue = string | number | boolean | Date | number[];

export function toFinancistoEntityString(entityName: EntityTypes, values: Array<[string, EntityValue]>, allowKeys: string[] = []) {
    const pairs = [
        ['$ENTITY', entityName.toLowerCase()],
        ...values,
    ].filter(([key, value]) => allowKeys.indexOf(key) > -1 || typeof value !== 'undefined');

    return pairs.map(([key, value]) => {
        if (Array.isArray(value)) {
            return `${key}:${value.join(',')}`;
        }

        if (typeof value === 'object' && value instanceof Date) {
            return `${key}:${value.getTime()}`;
        }

        if (typeof value === 'boolean') {
            return `${key}:${Number(value)}`;
        }

        if (typeof value === 'undefined') {
            return `${key}:`;
        }

        return `${key}:${value}`;
    }).join(Tags.EOL);
}

export function cloneObject(obj) {
    const clone = Object.create(Object.getPrototypeOf(obj));
    const descriptors = Object.getOwnPropertyDescriptors(obj);

    Object.defineProperties(clone, descriptors);

    return clone;
}
