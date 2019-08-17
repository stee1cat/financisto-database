import { FinancistoDatabase } from '../../models/FinancistoDatabase';
import { XmlBuilder } from './XmlBuilder';

export class AbilityCashProvider {
    public static parse(data: string): FinancistoDatabase {
        return new FinancistoDatabase();
    }

    public static generate(fd: FinancistoDatabase): string {
        const xmlBuilder = new XmlBuilder(fd);

        return xmlBuilder.build();
    }
}
