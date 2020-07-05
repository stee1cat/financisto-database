import { DbBuilder } from './DbBuilder';
import { Entity } from './Entity';
import { EntityFactory } from './EntityFactory';
import { EntityTypes } from './EntityTypes';
import { FinancistoDatabase } from './FinancistoDatabase';
import { Tags } from './Tags';

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
                    if (!isStart) {
                        const [key, value] = line.split(':');

                        switch (key) {
                            case Tags.DatabaseVersion:
                                result.setVersion(Number(value));
                                break;
                            case Tags.VersionCode:
                                result.setVersionCode(Number(value));
                                break;
                            case Tags.VersionName:
                                result.setVersionName(value);
                                break;
                        }
                    } else {
                        const match = line.match(entityBegin);

                        if (match) {
                            const [, entityName] = match;

                            entity = new Entity(entityName);
                        } else if (entity && line === Tags.EntityDelimiter) {
                            switch (entity.name) {
                                case EntityTypes.Location:
                                    const location = EntityFactory.createLocation(entity);

                                    result.addLocation(location);
                                    break;
                                case EntityTypes.Account:
                                    const account = EntityFactory.createAccount(entity);

                                    result.addAccount(account);
                                    break;
                                case EntityTypes.Transaction:
                                    const transaction = EntityFactory.createTransaction(entity);

                                    result.addTransaction(transaction);
                                    break;
                                case EntityTypes.Currency:
                                    const currency = EntityFactory.createCurrency(entity);

                                    result.addCurrency(currency);
                                    break;
                                case EntityTypes.Category:
                                    const category = EntityFactory.createCategory(entity);

                                    result.addCategory(category);
                                    break;
                                case EntityTypes.CurrencyExchangeRate:
                                    const rate = EntityFactory.createCurrencyExchangeRate(entity);

                                    result.addCurrencyExchangeRate(rate);
                                    break;
                                case EntityTypes.Project:
                                    const project = EntityFactory.createProject(entity);

                                    result.addProject(project);
                                    break;
                                case EntityTypes.Payee:
                                    const payee = EntityFactory.createPayee(entity);

                                    result.addPayee(payee);
                                    break;
                                case EntityTypes.Budget:
                                    const budget = EntityFactory.createBudget(entity);

                                    result.addBudget(budget);
                                    break;
                                case EntityTypes.Attribute:
                                    const attribute = EntityFactory.createAttribute(entity);

                                    result.addAttribute(attribute);
                                    break;
                                case EntityTypes.CategoryAttribute:
                                    const categoryAttribute = EntityFactory.createCategoryAttribute(entity);

                                    result.addCategoryAttribute(categoryAttribute);
                                    break;
                                case EntityTypes.TransactionAttribute:
                                    const transactionAttribute = EntityFactory.createTransactionAttribute(entity);

                                    result.addTransactionAttribute(transactionAttribute);
                                    break;
                                default:
                                    // console.log(entity);
                            }
                        } else if (entity) {
                            const [, key, value] = line.match(/^(\w+):(.*)$/i);

                            if (key) {
                                entity.push(key, value);
                            }
                        }
                    }
            }
        }

        return result;
    }

    public static generate(fd: FinancistoDatabase): string {
        const dbBuilder = new DbBuilder(fd);

        return dbBuilder.build();
    }
}
