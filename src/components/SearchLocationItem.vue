<template>
  <li>
    <button @mouseup.left="selectedLocationHandler(searchResult._links['city:item'].href)">
      <span>{{ searchCity }}</span>
      <span>{{ searchResult.matching_full_name.slice(searchCity.length) }}</span>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { api } from '../api';

export default defineComponent({
  name: 'SearchLocationItem',
  props: {
    searchCity: {
      type: String,
      default: '',
    },
    searchResult: {
      type: Object,
      required: true,
    },
  },
  emits: ['selectedLocation'],
  setup(props, { emit }) {
    const selectedLocationHandler = async (url: string) => {
      const newLocation = await api.getCityToLink({ url });
      emit('selectedLocation', newLocation);
    };

    return {
      selectedLocationHandler,
    };
  },
});
</script>
