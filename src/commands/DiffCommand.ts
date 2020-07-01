import { ICommand } from '../models/ICommand';

export class DiffCommand implements ICommand {
    public execute(): Promise<number> {
        return Promise.resolve(0);
    }
}
