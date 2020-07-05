import { FinancistoDatabase } from './FinancistoDatabase';
import { Tags } from './Tags';

export class DbBuilder {
    constructor(private db: FinancistoDatabase) {}

    public build(): string {
        let result = this.buildHeader();

        result += ([
                this.db.getAccounts(),
                this.db.getAttributes(),
                this.db.getCategoryAttributes(),
                this.db.getTransactionAttributes(),
                this.db.getBudgets(),
                this.db.getCategories(),
                this.db.getCurrencies(),
                this.db.getLocations(),
                this.db.getProjects(),
                this.db.getTransactions(),
                this.db.getPayees(),
                this.db.getCurrencyExchangeRates(),
            ] as any)
            .reduce((allEntities, entities) => allEntities.concat(entities), [])
            .map(entity => Tags.EOL + entity.toString())
            .join(`${Tags.EOL}${Tags.EntityDelimiter}`);

        result += Tags.EOL + this.buildFooter();

        return result;
    }

    protected buildHeader(): string {
        return [
            `${Tags.Package}:${this.db.getPackage()}`,
            `${Tags.VersionCode}:${this.db.getVersionCode()}`,
            `${Tags.VersionName}:${this.db.getVersionName()}`,
            `${Tags.DatabaseVersion}:${this.db.getVersion()}`,
            Tags.Start,
        ].join(Tags.EOL);
    }

    protected buildFooter(): string {
        return Tags.EntityDelimiter + Tags.EOL + Tags.End;
    }
}
