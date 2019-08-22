import { ICommand } from '../models/ICommand';
import { ICommandLineArguments } from '../models/ICommandLineArguments';

export class DiffCommand implements ICommand {
    public execute(args: ICommandLineArguments): Promise<number> {
        return Promise.resolve(0);
    }
}
