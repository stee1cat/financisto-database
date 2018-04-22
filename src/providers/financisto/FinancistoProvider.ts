import { Location } from '../../models/Location';
import { Money } from '../../models/Money';
import { Entity } from './Entity';

export enum EntityTypes {
    Account = 'account',
    Transaction = 'transactions',
    Location = 'locations'
}

enum Tags {
    Package = 'PACKAGE',
    VersionCode = 'VERSION_CODE',
    VersionName = 'VERSION_NAME',
    DatabaseVersion = 'DATABASE_VERSION',
    EntityEnd = '$$',
    Start = '#START',
    End = '#END'
}

export class FinancistoProvider {

    public static parse(data: string): Money {
        let lines: string[] = data.split('\n');
        let isStart = false;
        let entityBegin = /\$ENTITY:(\w+)/i;
        let result = new Money();
        let entity: Entity;

        for (let line of lines) {
            switch (line.trim()) {
                case Tags.Start:
                    isStart = true;
                    break;
                case Tags.End:
                    isStart = false;
                    break;
                default:
                    if (isStart) {
                        let match;

                        if (match = line.match(entityBegin)) {
                            entity = new Entity(match[1]);
                        } else if (entity && line === Tags.EntityEnd) {
                            if (entity.name === EntityTypes.Location) {
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

                                result.addLocation(location);
                            }
                        } else if (entity) {
                            let parts = line.match(/^(\w+):(.*)$/i);

                            if (parts) {
                                entity.push(parts[1], parts[2])
                            }
                        }
                    }
            }
        }

        return result;
    }

}