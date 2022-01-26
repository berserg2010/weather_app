<template>
  <header>
    <IconSvg icon="Location" size="20" />
    <span class="location">{{ currentLocation.name }}</span>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import IconSvg from './IconSvg.vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    IconSvg,
  },
  setup() {
    const store = useStore();

    const currentLocation = computed(() => store.state.settings.currentLocation);

    return {
      currentLocation,
    };
  },
});
</script>
