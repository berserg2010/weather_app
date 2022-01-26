import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { DEFAULT_CURRENT_LOCATION, DEFAULT_SETTINGS } from '../../helpers/variables';

type State = {
  currentLocation: CurrentLocation;
  settings: Settings;
  timezoneOffset: number;
};

const state: State = {
  currentLocation: DEFAULT_CURRENT_LOCATION,
  settings: DEFAULT_SETTINGS,
  timezoneOffset: 0,
};

const mutations: MutationTree<State> = {
  changeCurrentLocation(state, data) {
    state.currentLocation = data;
  },
  changeSettings(state, settings) {
    state.settings = settings;
  },
  changeTimezoneOffset(state, tsOffset) {
    state.timezoneOffset = tsOffset;
  },
};

const actions: ActionTree<State, unknown> = {
  changeCurrentLocation({ commit }, data) {
    commit('changeCurrentLocation', data);
  },
  changeSettings({ commit }, settings) {
    commit('changeSettings', settings);
  },
  changeTimezoneOffset({ commit }, tsOffset) {
    commit('changeTimezoneOffset', tsOffset);
  },
};

const getters: GetterTree<State, unknown> = {};

export const settings: Module<State, unknown> = {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
