import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { UserField } from '@/modules/auth/user-field';

function label(name) {
  return i18n(`entities.member.addNote.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  note: new StringField('note', label('note'), {
    required: true,
  }),
  createdAt: new DateTimeField('createdAt', label('createdAt')),
  updatedAt: new DateTimeField('updatedAt', label('updatedAt')),
  updatedBy: UserField.relationToOne('updatedBy', label('updatedBy'), {}), 
};

export class MemberNoteModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
