import { FinancistoDatabase } from '../../models/FinancistoDatabase';

export class AbilityCashProvider {

    public static parse(data: string): FinancistoDatabase {
        return new FinancistoDatabase();
    }

}
