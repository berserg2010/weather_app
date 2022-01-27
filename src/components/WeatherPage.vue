<template>
  <div class="wrapper">
    <HeaderComponent />

    <CurrentForecast v-if="currentForecast.dt" :currentForecast="forecastAdapter(currentForecast)" />

    <main>
      <section v-if="hourlyForecast.length" class="forecast_day">
        <ul>
          <HourlyForecastItem
            v-for="(value, index) in hourlyForecast.slice(0, 5)"
            :hourlyForecast="forecastAdapter(value)"
            :key="value.dt"
            :first="index === 0"
          />
        </ul>
      </section>

      <section v-if="dailyForecast.length" class="forecast_week">
        <ul>
          <DailyForecastItem :dailyForecast="forecastAdapter(i)" v-for="i in dailyForecast.slice(0, 5)" :key="i.dt" />
        </ul>
      </section>
    </main>

    <button class="settings_button" @click="openSettingsHandler">
      <IconSvg icon="Settings" size="24" />
    </button>
  </div>

  <transition name="fade">
    <SettingsPage v-if="isOpenSettings" @closeSettings="openSettingsHandler" />
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

import HeaderComponent from './HeaderComponent.vue';
import CurrentForecast from './CurrentForecast.vue';
import HourlyForecastItem from './HourlyForecastItem.vue';
import DailyForecastItem from './DailyForecastItem.vue';
import SettingsPage from './SettingsPage.vue';
import IconSvg from './IconSvg.vue';
import { forecastAdapter, setCurrentLocationToStorage, setSettingsToStorage } from '../helpers';
import { api } from '../api';

export default defineComponent({
  name: 'WeatherPage',
  components: {
    HeaderComponent,
    CurrentForecast,
    HourlyForecastItem,
    DailyForecastItem,
    SettingsPage,
    IconSvg,
  },
  setup() {
    const store = useStore();

    const isOpenSettings = ref(false);
    const openSettingsHandler = () => (isOpenSettings.value = !isOpenSettings.value);

    const currentLocation = computed(() => store.state.settings.currentLocation);
    watchEffect(() => api.getForecast(currentLocation.value.lat, currentLocation.value.lon));

    const currentForecast = computed(() => store.getters.getCurrentForecast);
    const hourlyForecast = computed(() => store.getters.getHourlyForecast);
    const dailyForecast = computed(() => store.getters.getDailyForecast);

    setCurrentLocationToStorage();
    setSettingsToStorage();

    return {
      isOpenSettings,
      openSettingsHandler,
      currentForecast,
      hourlyForecast,
      dailyForecast,
      forecastAdapter,
    };
  },
});
</script>
