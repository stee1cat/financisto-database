#!/usr/bin/env node

import { AbilityCashProvider } from './providers/ability-cash/AbilityCashProvider';
import { FinancistoProvider } from './providers/financisto/FinancistoProvider';
import { extract, readFile, writeFile } from './util';
import { CLI } from './CLI';

const cli = new CLI();
const args = cli.getArguments();

readFile(args.input)
    .then(async function (file) {
        const data = extract(file);
        const fd = FinancistoProvider.parse(data);
        const xml = AbilityCashProvider.generate(fd);

        await writeFile(args.output, xml);
    });
