import * as path from 'path';
import * as parseArgs from 'minimist';
import { Commands } from './models/Commands';
import { ICommandLineArguments } from './models/ICommandLineArguments';
import { IParsedArgs } from './models/IParsedArgs';

export class CLI {
    protected args: string[];
    protected readonly COMMAND_INDEX = 2;

    constructor() {
        this.args = process.argv;
    }

    public validateAndGetArguments(): [string, ICommandLineArguments] {
        const options = {
            string: [
                'input',
                'output',
            ],
        };
        const args: IParsedArgs = parseArgs(this.args, options);

        if (!this.validateArgs(args)) {
            this.printHelp();

            process.exit(-1);
        }

        return [args._[this.COMMAND_INDEX] || Commands.Unknown, this.prepareArguments(args)];
    }

    public printHelp(): void {
        console.log('help');
    }

    protected validateArgs(args: IParsedArgs): boolean {
        const command: string = args._[this.COMMAND_INDEX];

        switch (command) {
            case Commands.Convert:
                return args.input && args.output;
            case Commands.Diff:
                break;
        }

        return true;
    }

    protected prepareArguments(args: IParsedArgs): ICommandLineArguments {
        const result: ICommandLineArguments = {
            input: '',
            output: '',
        };
        const executionPath = process.cwd();

        if (args.output) {
            result.output = path.resolve(executionPath, args.output);
        }

        if (args.input) {
            result.input = path.resolve(executionPath, args.input);
        }

        return result;
    }
}
