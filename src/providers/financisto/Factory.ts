import { debug } from 'util';
import { Account } from '../../models/Account';
import { Category } from '../../models/Category';
import { Currency } from '../../models/Currency';
import { Location } from '../../models/Location';
import { Transaction } from '../../models/Transaction';
import { Entity } from './Entity';

export class Factory {

    public static createLocation(entity: Entity): Location {
        let location = new Location();

        location.id = +entity.get('_id');
        location.name = entity.get('name');
        location.title = entity.get('title');
        location.datetime = +entity.get('datetime');
        location.accuracy = +entity.get('accuracy');
        location.latitude = +entity.get('latitude');
        location.longitude = +entity.get('longitude');
        location.count = +entity.get('count');
        location.isPayee = Boolean(+entity.get('is_payee'));
        location.updatedOn = new Date(+entity.get('updated_on'));

        return location;
    }

    public static createAccount(entity: Entity): Account {
        let account = new Account();

        account.id = +entity.get('_id');
        account.title = entity.get('title');
        account.creationDate = new Date(+entity.get('creation_date'));
        account.currencyId = +entity.get('currency_id');
        account.totalAmount = +entity.get('total_amount');
        account.type = entity.get('type');
        account.sortOrder = +entity.get('sort_order');
        account.isActive = Boolean(+entity.get('is_active'));
        account.isIncludeIntoTotals = Boolean(+entity.get('is_include_into_totals'));
        account.lastCategoryId = +entity.get('last_category_id');
        account.lastAccountId = +entity.get('last_account_id');
        account.totalLimit = +entity.get('total_limit');
        account.closingDay = +entity.get('closing_day');
        account.paymentDay = +entity.get('payment_day');
        account.lastTransactionDate = new Date(+entity.get('last_transaction_date'));
        account.updatedOn = new Date(+entity.get('updated_on'));

        return account;
    }

    public static createTransaction(entity: Entity): Transaction {
        let transaction = new Transaction();

        transaction.id = +entity.get('_id');
        transaction.fromAccountId = +entity.get('from_account_id');
        transaction.toAccountId = +entity.get('to_account_id');
        transaction.categoryId = +entity.get('category_id');
        transaction.projectId = +entity.get('project_id');
        transaction.locationId = +entity.get('location_id');
        transaction.note = entity.get('note');
        transaction.fromAmount = +entity.get('from_amount');
        transaction.toAmount = +entity.get('to_amount');
        transaction.datetime = new Date(+entity.get('datetime'));
        transaction.accuracy = +entity.get('accuracy');
        transaction.latitude = +entity.get('latitude');
        transaction.longitude = +entity.get('longitude');
        transaction.isTemplate = Boolean(+entity.get('is_template'));
        transaction.status = entity.get('status');
        transaction.isCcardPayment = Boolean(+entity.get('is_ccard_payment'));
        transaction.lastRecurrence = new Date(+entity.get('last_recurrence'));
        transaction.payeeId = +entity.get('payee_id');
        transaction.parentId = +entity.get('parent_id');
        transaction.updatedOn = new Date(+entity.get('updated_on'));
        transaction.originalCurrencyId = +entity.get('original_currency_id');
        transaction.originalFromAmount = +entity.get('original_from_amount');

        return transaction;
    }

    public static createCurrency(entity: Entity): Currency {
        let currency = new Currency();

        currency.id = +entity.get('_id');
        currency.name = entity.get('name');
        currency.title = entity.get('title');
        currency.symbol = entity.get('symbol');
        currency.isDefault = Boolean(+entity.get('is_default'));
        currency.decimals = +entity.get('decimals');
        currency.decimalSeparator = entity.get('decimal_separator');
        currency.groupSeparator = entity.get('group_separator');
        currency.symbolFormat = entity.get('symbol_format');
        currency.updatedOn = new Date(+entity.get('updated_on'));

        return currency;
    }

    public static createCategory(entity: Entity): Category {
        let cateogry = new Category();

        cateogry.id = +entity.get('_id');
        cateogry.title = entity.get('title');
        cateogry.left = +entity.get('left');
        cateogry.right = +entity.get('right');
        cateogry.lastLocationId = +entity.get('last_location_id');
        cateogry.lastProjectId = +entity.get('last_project_id');
        cateogry.sortOrder = +entity.get('sort_order');
        cateogry.type = +entity.get('type');
        cateogry.updatedOn = new Date(+entity.get('updated_on'));

        return cateogry;
    }

}
