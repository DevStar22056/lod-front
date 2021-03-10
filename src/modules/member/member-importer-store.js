import importerStore from '@/shared/importer/importer-store';
import { MemberService } from '@/modules/member/member-service';
import memberImporterFields from '@/modules/member/member-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  MemberService.import,
  memberImporterFields,
  i18n('entities.member.importer.fileName'),
  i18n('entities.member.importer.hint'),
);
