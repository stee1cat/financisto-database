import { FinancistoDatabase } from '../../models/FinancistoDatabase';
import { XmlBuilder } from './XmlBuilder';

export class AbilityCashProvider {

    public static parse(data: string): FinancistoDatabase {
        return new FinancistoDatabase();
    }

    public static generate(fd: FinancistoDatabase): string {
        return XmlBuilder.build(fd);
    }

}
