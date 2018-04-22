import * as fs from 'fs';
import { promisify } from 'util';
import * as pako from 'pako';

export const readFile = promisify(fs.readFile);

export function extract(data: Buffer): string {
    return pako.inflate(data, {
        to: 'string'
    });
}