import { createStore } from 'vuex';

import { settings } from './modules/settings';
import { forecast } from './modules/forecast';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    settings,
    forecast,
  },
  strict: debug,
});

export default store;
