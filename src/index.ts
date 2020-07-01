#!/usr/bin/env node

import { program } from 'commander';
import { ConvertCommand } from './commands/ConvertCommand';
import { DiffCommand } from './commands/DiffCommand';

const packageInfo = require('../package.json');

program.version(packageInfo.version)
    .addCommand(
        program.createCommand()
            .command('convert <source> <destination>')
            .action(async (source: string, destination: string) => {
                await new ConvertCommand().execute(source, destination);
            }),
    )
    .addCommand(
        program.createCommand()
            .command('diff')
            .action(async () => {
                await new DiffCommand().execute();
            }),
    )
    .parse(process.argv);
