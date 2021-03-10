import { MemberNoteService } from '@/modules/member/member-note-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';

export default {
  namespaced: true,

  state: {
    loading: false,
    records: null,
  },

  getters: {
    records: (state) => state.records,
    loading: (state) => !!state.loading,
  },

  mutations: {
    FIND_STARTED(state) {
      state.records = null;
      state.loading = true;
    },

    FIND_SUCCESS(state, payload) {
      state.records = payload;
      state.loading = false;
    },

    FIND_ERROR(state) {
      state.records = null;
      state.loading = false;
    },
  },

  actions: {
    async doFindByMemberId({ commit }, id) {
      try {
        commit('FIND_STARTED');
        const records = await MemberNoteService.findByMemberId(id);
        commit('FIND_SUCCESS', records);
      } catch (error) {
        Errors.handle(error);
        commit('FIND_ERROR');
        routerAsync().push('/member');
      }
    },
  },
};
