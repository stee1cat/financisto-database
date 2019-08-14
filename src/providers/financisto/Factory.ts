import { Account } from '../../models/Account';
import { Category } from '../../models/Category';
import { Currency } from '../../models/Currency';
import { CurrencyExchangeRate } from '../../models/CurrencyExchangeRate';
import { Location } from '../../models/Location';
import { Project } from '../../models/Project';
import { Transaction } from '../../models/Transaction';
import { Entity } from './Entity';

export class Factory {
    public static createLocation(entity: Entity): Location {
        const location = new Location();

        location.id = entity.getNumber('_id');
        location.name = entity.get('name');
        location.title = entity.get('title');
        location.datetime = entity.getNumber('datetime');
        location.accuracy = entity.getNumber('accuracy');
        location.latitude = entity.getNumber('latitude');
        location.longitude = entity.getNumber('longitude');
        location.count = entity.getNumber('count');
        location.isPayee = entity.getBoolean('is_payee');
        location.updatedOn = entity.getDate('updated_on');

        return location;
    }

    public static createAccount(entity: Entity): Account {
        const account = new Account();

        account.id = entity.getNumber('_id');
        account.title = entity.get('title');
        account.note = entity.get('note');
        account.creationDate = entity.getDate('creation_date');
        account.currencyId = entity.getNumber('currency_id');
        account.totalAmount = entity.getNumber('total_amount');
        account.type = entity.get('type');
        account.sortOrder = entity.getNumber('sort_order');
        account.isActive = entity.getBoolean('is_active');
        account.isIncludeIntoTotals = entity.getBoolean('is_include_into_totals');
        account.lastCategoryId = entity.getNumber('last_category_id');
        account.lastAccountId = entity.getNumber('last_account_id');
        account.totalLimit = entity.getNumber('total_limit');
        account.closingDay = entity.getNumber('closing_day');
        account.paymentDay = entity.getNumber('payment_day');
        account.lastTransactionDate = entity.getDate('last_transaction_date');
        account.updatedOn = entity.getDate('updated_on');

        return account;
    }

    public static createTransaction(entity: Entity): Transaction {
        const transaction = new Transaction();

        transaction.id = entity.getNumber('_id');
        transaction.fromAccountId = entity.getNumber('from_account_id');
        transaction.toAccountId = entity.getNumber('to_account_id');
        transaction.categoryId = entity.getNumber('category_id');
        transaction.projectId = entity.getNumber('project_id');
        transaction.locationId = entity.getNumber('location_id');
        transaction.note = entity.get('note');
        transaction.fromAmount = entity.getNumber('from_amount');
        transaction.toAmount = entity.getNumber('to_amount');
        transaction.datetime = entity.getDate('datetime');
        transaction.accuracy = entity.getNumber('accuracy');
        transaction.latitude = entity.getNumber('latitude');
        transaction.longitude = entity.getNumber('longitude');
        transaction.isTemplate = entity.getBoolean('is_template');
        transaction.status = entity.get('status');
        transaction.isCcardPayment = entity.getBoolean('is_ccard_payment');
        transaction.lastRecurrence = entity.getDate('last_recurrence');
        transaction.payeeId = entity.getNumber('payee_id');
        transaction.parentId = entity.getNumber('parent_id');
        transaction.updatedOn = entity.getDate('updated_on');
        transaction.originalCurrencyId = entity.getNumber('original_currency_id');
        transaction.originalFromAmount = entity.getNumber('original_from_amount');

        return transaction;
    }

    public static createCurrency(entity: Entity): Currency {
        const currency = new Currency();

        currency.id = entity.getNumber('_id');
        currency.name = entity.get('name');
        currency.title = entity.get('title');
        currency.symbol = entity.get('symbol');
        currency.isDefault = entity.getBoolean('is_default');
        currency.decimals = entity.getNumber('decimals');
        currency.decimalSeparator = entity.get('decimal_separator');
        currency.groupSeparator = entity.get('group_separator');
        currency.symbolFormat = entity.get('symbol_format');
        currency.updatedOn = entity.getDate('updated_on');

        return currency;
    }

    public static createCategory(entity: Entity): Category {
        const cateogry = new Category();

        cateogry.id = entity.getNumber('_id');
        cateogry.title = entity.get('title');
        cateogry.left = entity.getNumber('left');
        cateogry.right = entity.getNumber('right');
        cateogry.lastLocationId = entity.getNumber('last_location_id');
        cateogry.lastProjectId = entity.getNumber('last_project_id');
        cateogry.sortOrder = entity.getNumber('sort_order');
        cateogry.type = entity.getNumber('type');
        cateogry.updatedOn = entity.getDate('updated_on');

        return cateogry;
    }

    public static createCurrencyExchangeRate(entity: Entity): CurrencyExchangeRate {
        const rate = new CurrencyExchangeRate();

        rate.fromCurrencyId = entity.getNumber('from_currency_id');
        rate.toCurrencyId = entity.getNumber('to_currency_id');
        rate.rateDate = entity.getDate('rate_date');
        rate.rate = entity.getNumber('rate');
        rate.updatedOn = entity.getDate('updated_on');

        return rate;
    }

    public static createProject(entity: Entity): Project {
        const project = new Project();

        project.id = entity.getNumber('_id');
        project.title = entity.get('title');
        project.isActive = entity.getBoolean('is_active');
        project.updatedOn = entity.getDate('updated_on');

        return project;
    }
}
