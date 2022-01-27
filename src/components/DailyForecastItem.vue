<template>
  <li>
    <div class="forecast_week__date">
      <span>{{ getMonthDay(dailyForecast.dt) }}</span>
      <span>{{ getWeekday(dailyForecast.dt) }}</span>
    </div>

    <IconSvg :icon="dailyForecast.weather_icon" size="44" />

    <div class="forecast_week__temperature">
      <span>{{ dailyForecast.temp.max }}</span>
      <span>{{ dailyForecast.temp.min }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { getMonthDay, getWeekday } from '../helpers';
import IconSvg from './IconSvg.vue';

export default defineComponent({
  name: 'DailyForecastItem',
  components: {
    IconSvg,
  },
  props: {
    dailyForecast: {
      type: Object as PropType<Forecast>,
      required: true,
    },
  },
  setup() {
    return {
      getMonthDay,
      getWeekday,
    };
  },
});
</script>
