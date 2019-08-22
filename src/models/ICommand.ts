import { ICommandLineArguments } from './ICommandLineArguments';

export interface ICommand {
    execute(args: ICommandLineArguments): Promise<number>;
}
