<template>
  <section class="current_weather">
    <div class="main_params">
      <span class="datetime">
        <time>{{ getTime(datetime) }}</time>

        <time>{{ getMonthDay(datetime) }}</time>
        ,
        <time>{{ getYear(datetime) }}</time>
      </span>

      <div class="temperature">
        {{ currentForecast.temp }}
        <IconSvg v-if="currentForecast.weather_icon" :icon="currentForecast.weather_icon" size="96" />
      </div>
      <span class="status">{{ currentForecast.weather_description }}</span>
    </div>

    <div class="secondary_params">
      <span
        ><IconSvg icon="Wind" size="32" />{{ currentForecast.wind_speed }}, E<IconSvg
          class="icon_transform"
          :style="styleIconTransform"
          icon="Arrow"
          size="22"
      /></span>
      <span><IconSvg icon="Hygrometer" size="32" />{{ currentForecast.humidity }}%</span>
      <span><IconSvg icon="PressureGauge" size="32" />{{ currentForecast.pressure }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onDeactivated, PropType, ref, toRefs } from 'vue';
import { useStore } from 'vuex';

import IconSvg from './IconSvg.vue';
import { getMonthDay, getTime, getYear } from '../helpers';

export default defineComponent({
  name: 'CurrentForecast',
  components: {
    IconSvg,
  },
  props: {
    currentForecast: {
      type: Object as PropType<Forecast>,
      required: true,
    },
  },
  setup(props) {
    const { currentForecast } = toRefs(props);

    const store = useStore();
    const tzOffset = computed(() => store.state.settings.timezoneOffset / 3600);

    const styleIconTransform = computed(() => ({ transform: `rotate(${currentForecast.value.wind_deg}deg)` }));

    const datetime = ref(new Date());
    const aClock = () => {
      datetime.value = new Date();
    };
    const idAClock = setInterval(aClock, 1000);
    onDeactivated(() => clearInterval(idAClock));

    return {
      datetime,
      getTime,
      getMonthDay,
      getYear,
      styleIconTransform,

      tzOffset,
    };
  },
});
</script>
