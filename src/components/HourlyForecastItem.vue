<template>
  <li>
    <span>{{ first ? 'Now' : getTime(hourlyForecast.dt) }}</span>
    <IconSvg :icon="hourlyForecast.weather_icon" size="26" />
    <span>{{ hourlyForecast.temp }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import IconSvg from './IconSvg.vue';
import { getTime } from '../helpers';

export default defineComponent({
  name: 'HourlyForecastItem',
  components: {
    IconSvg,
  },
  props: {
    hourlyForecast: {
      type: Object as PropType<Forecast>,
      required: true,
    },
    first: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      getTime,
    };
  },
});
</script>
