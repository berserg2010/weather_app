<template>
  <div>
    <div class="settings__modal">
      <span class="title">Change Location?</span>
      <button class="settings_button_submit plain" @mouseup="getGeoLocation(getLocation)">
        Use My Current Location
      </button>
      <button class="settings_button_submit plain" @mouseup="openSearchLocationHandler">
        Select location manually
      </button>
      <button class="settings_button_submit cancel" type="button" @mouseup.left="closeModal">Cancel</button>
    </div>
    <div class="backstage" @mouseup.left="closeModal"></div>

    <transition name="fade">
      <SearchLocation
        v-if="isOpenSearchLocation"
        @selectedLocation="returnNewCurrentLocation"
        @closeSearchLocation="openSearchLocationHandler"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { getGeoLocation } from '../helpers';
import SearchLocation from './SearchLocation.vue';
import { api } from '../api';

export default defineComponent({
  name: 'SettingsModal',
  components: {
    SearchLocation,
  },
  emits: ['closeModal', 'returnNewCurrentLocation'],
  setup(props, { emit }) {
    const closeModal = () => emit('closeModal');
    const returnNewCurrentLocation = (newCurrentLocation: CurrentLocation) => {
      emit('returnNewCurrentLocation', newCurrentLocation);
      closeModal();
    };

    const isOpenSearchLocation = ref(false);
    const openSearchLocationHandler = () => (isOpenSearchLocation.value = !isOpenSearchLocation.value);

    const getLocation = async ({ coords: { latitude: lat, longitude: lon } }: GeolocationPosition) => {
      const newLocation = await api.getCityToLocation({ lat, lon });
      if (newLocation) {
        returnNewCurrentLocation(newLocation);
      }
    };

    return {
      closeModal,
      isOpenSearchLocation,
      openSearchLocationHandler,
      returnNewCurrentLocation,
      getGeoLocation,
      getLocation,
    };
  },
});
</script>
