import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.sku.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  year: new IntegerField('year', label('year'), {
    "required": true,
    "min": 2019,
    "max": 2030
  }),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  description: new StringField('description', label('description'), {
    "max": 21845
  }),
  photos: new ImagesField('photos', label('photos'), 'sku/photos',{
    "max": 3,
    "size": 1000000
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  yearRange: new IntegerRangeField(
    'yearRange',
    label('yearRange'),
  ),
};

export class SkuModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
