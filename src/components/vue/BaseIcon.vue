<template>
  <svg :class="classList">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { useCssModule } from 'vue'
const $style = useCssModule()
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: ''
  }
})
const iconName = `/icons/sprite.svg#i-${props.icon}`
const classList = [[$style.icon], {
  [$style['icon--lg']]: props.size === 'lg'
}]
</script>

<style lang="postcss" module>
.icon {
  @apply h-5 w-5 transition-colors duration-300;

  &--lg {
    @apply h-8 w-8;
  }
}
</style>