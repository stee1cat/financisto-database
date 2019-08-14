import * as fs from 'fs';
import { promisify } from 'util';
import * as pako from 'pako';

export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);

export function extract(data: Buffer): string {
    return pako.inflate(data, {
        to: 'string',
    });
}

export function createTree(nodes, left = 1, right = false) {
    const tree = [];

    for (const node of nodes) {
        if (node.left === left + 1 && (!right || node.right < right)) {
            const n = cloneObject(node);

            n.children = createTree(nodes, node.left, node.right);
            tree.push(n);
            left = node.right;
        }
    }

    return tree;
}

export function cloneObject(obj) {
    const clone = Object.create(Object.getPrototypeOf(obj));
    const descriptors = Object.getOwnPropertyDescriptors(obj);

    Object.defineProperties(clone, descriptors);

    return clone;
}
