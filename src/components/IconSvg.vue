<template>
  <svg v-if="currentIcon" :viewBox="viewBox" :height="size" :width="size">
    <use :xlink:href="`#${currentIcon.id}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, shallowRef, toRefs } from 'vue';

type IconSize = '96' | '44' | '32' | '26' | '24' | '22' | '20';

export default defineComponent({
  name: 'IconSvg',
  props: {
    icon: {
      type: String,
      require: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: '32',
    },
  },
  setup(props) {
    const { icon, size } = toRefs(props);

    const viewBox = ref(`0 0 ${size.value} ${size.value}`);

    const currentIcon = shallowRef('');

    if (icon.value) {
      import(`../assets/img/${icon.value}.svg`)
        .then((val) => {
          // val is a Module has default
          currentIcon.value = val.default;
        })
        .catch((err) => {
          console.error('Import icon', icon.value, err);
        });
    }

    return {
      currentIcon,
      viewBox,
    };
  },
});
</script>
