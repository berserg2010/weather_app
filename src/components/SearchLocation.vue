<template>
  <div class="change_location">
    <div class="search_wrapper">
      <input type="search" v-model="searchCity" />
      <button class="settings_button" @mouseup="closeSearchLocation">
        <IconSvg icon="CloseSearch" size="32" />
      </button>
    </div>

    <ul class="list_location">
      <SearchLocationItem
        v-for="(searchResult, key) in searchResults"
        :key="key"
        :search-city="searchCity"
        :search-result="searchResult"
        @selectedLocation="selectedLocationHandler"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import IconSvg from './IconSvg.vue';
import { api } from '../api';
import SearchLocationItem from './SearchLocationItem.vue';

export default defineComponent({
  name: 'SearchLocation',
  components: {
    IconSvg,
    SearchLocationItem,
  },
  emits: ['selectedLocation', 'closeSearchLocation'],
  setup(props, { emit }) {
    const closeSearchLocation = () => emit('closeSearchLocation');
    const selectedLocationHandler = (newLocation: CurrentLocation) => {
      emit('selectedLocation', newLocation);
      closeSearchLocation();
    };

    const searchCity = ref('');
    const searchResults = ref([]);

    watch(searchCity, async () => {
      if (searchCity.value.length > 2) {
        searchResults.value = await api.getCityToName({ name: searchCity.value });
      } else {
        searchResults.value = [];
      }
    });

    return {
      searchCity,
      searchResults,
      selectedLocationHandler,
      closeSearchLocation,
    };
  },
});
</script>
