import { expect } from 'chai';
import 'mocha';

import { readFile, extract, createTree } from '../src/util';
import { INode } from '../src/models/INode';

describe('util', function () {
    const filename = `${__dirname}/data/20180503_100107_997.backup`;

    it('readFile', async function () {
        const file = await readFile(filename);

        expect(file.byteLength).to.be.equal(1036);
    });

    it('extract', async function () {
        const file = await readFile(filename);
        const data = extract(file);

        expect(data).to.have.string('PACKAGE:ru.orangesoftware.financisto');
    });

    it('createTree', function () {
        const result: INode[] = createTree([
            {
                id: 0,
                left: 0,
                right: 13,
            },
            {
                id: 1,
                left: 1,
                right: 8,
            },
            {
                id: 2,
                left: 9,
                right: 12,
            },
            {
                id: 3,
                left: 2,
                right: 5,
            },
            {
                id: 4,
                left: 6,
                right: 7,
            },
            {
                id: 5,
                left: 3,
                right: 4,
            },
            {
                id: 6,
                left: 10,
                right: 10,
            },
        ]);
        const expected: INode[] = [
            {
                id: 0,
                left: 0,
                right: 13,
                parentId: null,
                children: [
                    {
                        id: 1,
                        left: 1,
                        right: 8,
                        parentId: 0,
                        children: [
                            {
                                id: 3,
                                left: 2,
                                right: 5,
                                parentId: 1,
                                children: [
                                    {
                                        id: 5,
                                        left: 3,
                                        right: 4,
                                        parentId: 3,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: 4,
                                left: 6,
                                right: 7,
                                parentId: 1,
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 2,
                        left: 9,
                        right: 12,
                        parentId: 0,
                        children: [
                            {
                                id: 6,
                                left: 10,
                                right: 10,
                                parentId: 2,
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ];

        expect(result).to.be.deep.equal(expected);
    });
});
