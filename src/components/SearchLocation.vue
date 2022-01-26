<template>
  <div class="change_location">
    <div class="search_wrapper">
      <input type="search" />
      <button class="settings_button" @mouseup="closeSearchLocation">
        <IconSvg icon="CloseSearch" size="32" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconSvg from './IconSvg.vue';

export default defineComponent({
  name: 'SearchLocation',
  components: {
    IconSvg,
  },
  emits: ['closeSearchLocation'],
  setup(props, { emit }) {
    const closeSearchLocation = () => emit('closeSearchLocation');
    return {
      closeSearchLocation,
    };
  },
});
</script>
