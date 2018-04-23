import { Account } from '../../models/Account';
import { Location } from '../../models/Location';
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

}