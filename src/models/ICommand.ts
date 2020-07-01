export interface ICommand {
    execute(...args: any): Promise<number>;
}
