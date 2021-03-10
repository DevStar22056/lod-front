import routes from '@/modules/member/member-routes';
import store from '@/modules/member/member-store';
import MemberAutocompleteInput from '@/modules/member/components/member-autocomplete-input';

export default {
  components: [MemberAutocompleteInput],
  routes,
  store,
};
