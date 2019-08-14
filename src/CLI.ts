import * as path from 'path';
import * as parseArgs from 'minimist';
import { ICommandLineArguments } from './models/ICommandLineArguments';
import { IParsedArgs } from './models/IParsedArgs';

export class CLI {
    protected args: string[];

    constructor() {
        this.args = process.argv;
    }

    public getArguments(): ICommandLineArguments {
        const options = {
            string: [
                'input',
                'output',
            ],
        };
        const args: IParsedArgs = parseArgs(this.args, options);

        return this.prepareArguments(args);
    }

    protected prepareArguments(args: IParsedArgs): ICommandLineArguments {
        const result: ICommandLineArguments = {
            input: '',
            output: '',
            error: false,
        };
        const executionPath = process.cwd();

        if (!args.input || !args.output) {
            result.error = true;
        }

        if (args.output) {
            result.output = path.resolve(executionPath, args.output);
        }

        if (args.input) {
            result.input = path.resolve(executionPath, args.input);
        }

        return result;
    }
}
