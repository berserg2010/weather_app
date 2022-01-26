import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

type State = {
  current: Forecast | {};
  hourly: Forecast[] | [];
  daily: Forecast[] | [];
};

const state: State = {
  current: {},
  hourly: [],
  daily: [],
};

const mutations: MutationTree<State> = {
  changeForecast(state, forecast) {
    state.current = forecast.current;
    state.hourly = forecast.hourly;
    state.daily = forecast.daily;
  },
};

const actions: ActionTree<State, unknown> = {
  changeForecast({ commit }, forecast) {
    commit('changeForecast', forecast);
  },
};

const getters: GetterTree<State, unknown> = {
  getCurrentForecast(state): Forecast | unknown {
    return state.current;
  },
  getHourlyForecast(state): Forecast[] | [] {
    return state.hourly;
  },
  getDailyForecast(state): Forecast[] | [] {
    return state.daily;
  },
};

export const forecast: Module<State, unknown> = {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
