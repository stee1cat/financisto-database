#!/usr/bin/env node

import { CLI } from './CLI';
import { ConvertCommand } from './commands/ConvertCommand';
import { DiffCommand } from './commands/DiffCommand';
import { Commands } from './models/Commands';

const cli = new CLI();
const [command, args] = cli.validateAndGetArguments();

async function run() {
    let exitCode;

    switch (command) {
        case Commands.Convert:
            exitCode = await new ConvertCommand().execute(args);

            break;
        case Commands.Diff:
            exitCode = await new DiffCommand().execute(args);

            break;
        default:
            cli.printHelp();
    }

    process.exit(exitCode);
}

run();
