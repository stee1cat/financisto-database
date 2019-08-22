import { ICommand } from '../models/ICommand';
import { ICommandLineArguments } from '../models/ICommandLineArguments';
import { AbilityCashProvider } from '../providers/ability-cash/AbilityCashProvider';
import { FinancistoProvider } from '../providers/financisto/FinancistoProvider';
import { extract, readFile, writeFile } from '../util';

export class ConvertCommand implements ICommand {
    public async execute(args: ICommandLineArguments): Promise<number> {
        try {
            const file = await readFile(args.input);
            const data = extract(file);
            const fd = FinancistoProvider.parse(data);
            const xml = AbilityCashProvider.generate(fd);

            await writeFile(args.output, xml);

            return 0;
        } catch (e) {
            return -1;
        }
    }
}
