import { types } from 'mobx-state-tree';
import { CustomerStore } from './CustomerStore';

const Store = types.model('store', {
  customerStore: types.optional(CustomerStore, {})
});

export default Store;