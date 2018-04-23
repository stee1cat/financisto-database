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

}