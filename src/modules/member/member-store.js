import memberListStore from '@/modules/member/member-list-store';
import memberViewStore from '@/modules/member/member-view-store';
import memberImporterStore from '@/modules/member/member-importer-store';
import memberFormStore from '@/modules/member/member-form-store';
import memberDestroyStore from '@/modules/member/member-destroy-store';
import memberNoteViewStore from '@/modules/member/member-note-view-store';

export default {
  namespaced: true,

  modules: {
    destroy: memberDestroyStore,
    form: memberFormStore,
    list: memberListStore,
    view: memberViewStore,
    importer: memberImporterStore,
    subview: memberNoteViewStore,
  },
};
