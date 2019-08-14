import { FinancistoDatabase } from '../../models/FinancistoDatabase';
import { Entity } from './Entity';
import { Factory } from './Factory';

export enum EntityTypes {
    Account = 'account',
    Transaction = 'transactions',
    Location = 'locations',
    Currency = 'currency',
    Category = 'category',
    CurrencyExchangeRate = 'currency_exchange_rate',
    Project = 'project',
}

enum Tags {
    Package = 'PACKAGE',
    VersionCode = 'VERSION_CODE',
    VersionName = 'VERSION_NAME',
    DatabaseVersion = 'DATABASE_VERSION',
    EntityEnd = '$$',
    Start = '#START',
    End = '#END',
}

export class FinancistoProvider {
    public static parse(data: string): FinancistoDatabase {
        const lines: string[] = data.split('\n');
        let isStart = false;
        const entityBegin = /\$ENTITY:(\w+)/i;
        const result = new FinancistoDatabase();
        let entity: Entity;

        for (const line of lines) {
            switch (line.trim()) {
                case Tags.Start:
                    isStart = true;
                    break;
                case Tags.End:
                    isStart = false;
                    break;
                default:
                    if (isStart) {
                        const isBegin = line.match(entityBegin);

                        if (isBegin) {
                            entity = new Entity(isBegin[1]);
                        } else if (entity && line === Tags.EntityEnd) {
                            switch (entity.name) {
                                case EntityTypes.Location:
                                    const location = Factory.createLocation(entity);

                                    result.addLocation(location);
                                    break;
                                case EntityTypes.Account:
                                    const account = Factory.createAccount(entity);

                                    result.addAccount(account);
                                    break;
                                case EntityTypes.Transaction:
                                    const transaction = Factory.createTransaction(entity);

                                    result.addTransaction(transaction);
                                    break;
                                case EntityTypes.Currency:
                                    const currency = Factory.createCurrency(entity);

                                    result.addCurrency(currency);
                                    break;
                                case EntityTypes.Category:
                                    const category = Factory.createCategory(entity);

                                    result.addCategory(category);
                                    break;
                                case EntityTypes.CurrencyExchangeRate:
                                    const rate = Factory.createCurrencyExchangeRate(entity);

                                    result.addCurrencyExchangeRate(rate);
                                    break;
                                case EntityTypes.Project:
                                    const project = Factory.createProject(entity);

                                    result.addProject(project);
                                    break;
                                default:
                                    // console.log(entity);
                            }
                        } else if (entity) {
                            const parts = line.match(/^(\w+):(.*)$/i);

                            if (parts) {
                                entity.push(parts[1], parts[2]);
                            }
                        }
                    }
            }
        }

        return result;
    }
}
