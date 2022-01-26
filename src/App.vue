<template>
  <WeatherPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import WeatherPage from './components/WeatherPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    WeatherPage,
  },
});
</script>
