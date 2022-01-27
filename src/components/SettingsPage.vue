<template>
  <section class="settings">
    <div class="settings__wrapper">
      <div class="settings__header">
        <button class="settings_button" @click="closeSettingsHandler">
          <IconSvg icon="Close" size="22" />
        </button>
        <span>Settings</span>
      </div>

      <div class="settings__section">
        <span>Measure Units</span>
        <div class="settings__item">
          <span>Current Location</span>
          <button type="button" @mouseup.left="openSettingsModal">
            {{ (newCurrentLocation?.name || currentLocation.name).toUpperCase() }}
          </button>
        </div>
      </div>
      <div class="settings__section">
        <span>Measure Units</span>
        <div class="settings__item">
          <span>Temperature</span>
          <fieldset>
            <input id="celsius" value="celsius" type="radio" v-model="temperature" /><label for="celsius">C°</label>
            <input id="fahrenheit" value="fahrenheit" type="radio" v-model="temperature" /><label for="fahrenheit"
              >F°</label
            >
          </fieldset>
        </div>

        <div class="settings__item">
          <span>Wind Speed</span>
          <fieldset>
            <input id="ms" value="ms" type="radio" v-model="windSpeed" /><label for="ms">m/s</label>
            <input id="mph" value="mph" type="radio" v-model="windSpeed" /><label for="mph">mph</label>
          </fieldset>
        </div>
        <div class="settings__item">
          <span>Pressure</span>
          <fieldset>
            <input id="hpa" value="hpa" type="radio" v-model="pressure" /><label for="hpa">hPa</label>
            <input id="mmhg" value="mmhg" type="radio" v-model="pressure" /><label for="mmhg">mmHg</label>
          </fieldset>
        </div>
      </div>

      <button class="settings_button_submit" @mouseup="applySettings" :disabled="disabledButton">Apply Settings</button>
    </div>

    <transition name="fade">
      <SettingsModal
        v-if="isOpenSettingsModal"
        @closeModal="openSettingsModal"
        @returnNewCurrentLocation="newCurrentLocationHandler"
      />
    </transition>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import IconSvg from './IconSvg.vue';
import SettingsModal from './SettingsModal.vue';
import { useStore } from 'vuex';
import { checkSettings, setCurrentLocationToStorage, setSettingsToStorage } from '../helpers';

export default defineComponent({
  name: 'SettingsPage',
  components: {
    IconSvg,
    SettingsModal,
  },
  emits: ['closeSettings'],
  setup(props, { emit }) {
    const store = useStore();

    const newCurrentLocation = ref();
    const currentLocation = computed(() => store.state.settings.currentLocation);
    const newCurrentLocationHandler = (newLocation: CurrentLocation) => (newCurrentLocation.value = newLocation);

    const closeSettingsHandler = () => emit('closeSettings');

    const isOpenSettingsModal = ref(false);
    const openSettingsModal = () => (isOpenSettingsModal.value = !isOpenSettingsModal.value);

    const currentSettings = computed(() => store.state.settings.settings);

    const temperature = ref(currentSettings.value.temperature);
    const windSpeed = ref(currentSettings.value.windSpeed);
    const pressure = ref(currentSettings.value.pressure);

    const newSettings = computed(() => {
      return {
        temperature: temperature.value,
        windSpeed: windSpeed.value,
        pressure: pressure.value,
      };
    });

    const applySettings = () => {
      if (newCurrentLocation.value && newCurrentLocation.value.name != currentLocation.value.name) {
        setCurrentLocationToStorage(newCurrentLocation.value);
      }

      if (!checkSettings(newSettings.value, currentSettings.value)) {
        setSettingsToStorage(newSettings.value);
      }
      closeSettingsHandler();
    };

    const disabledButton = computed(() => {
      return typeof newCurrentLocation.value === 'undefined' && checkSettings(newSettings.value, currentSettings.value);
    });

    return {
      currentLocation,
      newCurrentLocation,
      closeSettingsHandler,
      isOpenSettingsModal,
      openSettingsModal,

      temperature,
      windSpeed,
      pressure,

      applySettings,
      disabledButton,
      newCurrentLocationHandler,
    };
  },
});
</script>
