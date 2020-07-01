import { ICommand } from '../models/ICommand';
import { AbilityCashProvider } from '../providers/ability-cash/AbilityCashProvider';
import { FinancistoProvider } from '../providers/financisto/FinancistoProvider';
import { extract, readFile, writeFile } from '../util';

export class ConvertCommand implements ICommand {
    public async execute(input: string, output: string): Promise<number> {
        try {
            const file = await readFile(input);
            const data = extract(file);
            const fd = FinancistoProvider.parse(data);
            const xml = AbilityCashProvider.generate(fd);

            await writeFile(output, xml);

            return 0;
        } catch (e) {
            return -1;
        }
    }
}
