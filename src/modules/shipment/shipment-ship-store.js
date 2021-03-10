import { ShipmentService } from '@/modules/shipment/shipment-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';
import { i18n } from '@/i18n';

export default {
  namespaced: true,

  state: {
    loading: false,
  },

  getters: {
    loading: (state) => !!state.loading,
  },

  mutations: {
    SHIP_ALL_STARTED(state) {
      state.loading = true;
    },

    SHIP_ALL_SUCCESS(state) {
      state.loading = false;
    },

    SHIP_ALL_ERROR(state) {
      state.loading = false;
    },

    SHIP_STARTED(state) {
      state.loading = true;
    },

    SHIP_SUCCESS(state) {
      state.loading = false;
    },

    SHIP_ERROR(state) {
      state.loading = false;
    },
  },

  actions: {
    async doShip({ commit, dispatch, rootGetters }, id) {
      try {
        commit('SHIP_STARTED');

        await ShipmentService.shipAll([id]);

        commit('SHIP_SUCCESS');

        Message.success(i18n('entities.shipment.ship.success'));

        routerAsync().push('/shipment');

        dispatch(
          `${'shipment/list'}/doFetch`,
          rootGetters[`${'shipment/list'}/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('SHIP_ERROR');
      }
    },

    async doShipAll(
      { commit, dispatch, rootGetters },
      ids,
    ) {
      try {
        commit('SHIP_ALL_STARTED');

        await ShipmentService.shipAll(ids);

        commit('SHIP_ALL_SUCCESS');

        dispatch(`${'shipment/list'}/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.shipment.shipAll.success'),
        );

        routerAsync().push('/shipment');

        dispatch(
          `${'shipment/list'}/doFetch`,
          rootGetters[`${'shipment/list'}/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('SHIP_ALL_ERROR');
      }
    },
  },
};
