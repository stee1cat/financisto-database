import { Account } from './entities/Account';
import { AccountType } from './entities/AccountType';
import { Attribute } from './entities/Attribute';
import { AttributeType } from './entities/AttributeType';
import { Budget } from './entities/Budget';
import { Category } from './entities/Category';
import { CategoryAttribute } from './entities/CategoryAttribute';
import { Currency } from './entities/Currency';
import { CurrencyExchangeRate } from './entities/CurrencyExchangeRate';
import { Location } from './entities/Location';
import { LocationProvider } from './entities/LocationProvider';
import { Payee } from './entities/Payee';
import { Project } from './entities/Project';
import { Transaction } from './entities/Transaction';
import { TransactionAttribute } from './entities/TransactionAttribute';
import { Entity } from './Entity';

export class EntityFactory {
    public static createPayee(entity: Entity): Payee {
        const payee = new Payee();

        payee.id = entity.getNumber('_id');
        payee.title = entity.get('title');
        payee.updatedOn = entity.getDate('updated_on');
        payee.lastCategoryId = entity.getNumber('last_category_id');
        payee.isActive = entity.getBoolean('is_active');

        return payee;
    }

    public static createLocation(entity: Entity): Location {
        const location = new Location();

        location.id = entity.getNumber('_id');
        location.name = entity.get('name');
        location.title = entity.get('title');
        location.datetime = entity.getNumber('datetime');
        location.provider = entity.get('provider') as LocationProvider;
        location.accuracy = entity.getNumber('accuracy');
        location.latitude = entity.getNumber('latitude');
        location.longitude = entity.getNumber('longitude');
        location.count = entity.getNumber('count');
        location.isPayee = entity.getBoolean('is_payee');
        location.resolvedAddress = entity.get('resolved_address');
        location.updatedOn = entity.getDate('updated_on');
        location.isActive = entity.getBoolean('is_active');

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
        account.type = entity.get('type') as AccountType;
        account.issuer = entity.get('issuer');
        account.number = entity.getNumber('number');
        account.sortOrder = entity.getNumber('sort_order');
        account.isActive = entity.getBoolean('is_active');
        account.isIncludeIntoTotals = entity.getBoolean('is_include_into_totals');
        account.lastCategoryId = entity.getNumber('last_category_id');
        account.lastAccountId = entity.getNumber('last_account_id');
        account.totalLimit = entity.getNumber('total_limit');
        account.cardIssuer = entity.get('card_issuer');
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
        transaction.provider = entity.get('provider') as LocationProvider;
        transaction.accuracy = entity.getNumber('accuracy');
        transaction.latitude = entity.getNumber('latitude');
        transaction.longitude = entity.getNumber('longitude');
        transaction.isTemplate = entity.getNumber('is_template');
        transaction.recurrence = entity.get('recurrence');
        transaction.templateName = entity.get('template_name');
        transaction.status = entity.get('status');
        transaction.attachedPicture = entity.get('attached_picture');
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
        currency.isActive = entity.getBoolean('is_active');

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
        cateogry.isActive = entity.getBoolean('is_active');

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

    public static createBudget(entity: Entity): Budget {
        const budget = new Budget();

        budget.id = entity.getNumber('_id');
        budget.title = entity.get('title');
        budget.categoryId = entity.getArrayOfNumber('category_id');
        budget.currencyId = entity.getNumber('currency_id');
        budget.amount = entity.getNumber('amount');
        budget.includeSubcategories = entity.getBoolean('include_subcategories');
        budget.startDate = entity.getDate('start_date');
        budget.endDate = entity.getDate('end_date');
        budget.recur = entity.get('recur');
        budget.recurNum = entity.getNumber('recur_num');
        budget.isCurrent = entity.getBoolean('is_current');
        budget.parentBudgetId = entity.getNumber('parent_budget_id');
        budget.projectId = entity.getArrayOfNumber('project_id');
        budget.expanded = entity.getBoolean('expanded');
        budget.includeCredit = entity.getBoolean('include_credit');
        budget.updatedOn = entity.getDate('updated_on');
        budget.budgetCurrencyId = entity.getNumber('budget_currency_id');

        return budget;
    }

    public static createAttribute(entity: Entity): Attribute {
        const attribute = new Attribute();

        attribute.id = entity.getNumber('_id');
        attribute.type = entity.getNumber('type') as AttributeType;
        attribute.title = entity.get('title');
        attribute.defaultValue = entity.get('default_value');
        attribute.isActive = entity.getBoolean('is_active');

        return attribute;
    }

    public static createCategoryAttribute(entity: Entity): CategoryAttribute {
        const categoryAttribute = new CategoryAttribute();

        categoryAttribute.categoryId = entity.getNumber('category_id');
        categoryAttribute.attributeId = entity.getNumber('attribute_id');

        return categoryAttribute;
    }

    public static createTransactionAttribute(entity: Entity): TransactionAttribute {
        const transactionAttribute = new TransactionAttribute();

        transactionAttribute.transactionId = entity.getNumber('transaction_id');
        transactionAttribute.attributeId = entity.getNumber('attribute_id');
        transactionAttribute.value = entity.get('value');

        return transactionAttribute;
    }
}
