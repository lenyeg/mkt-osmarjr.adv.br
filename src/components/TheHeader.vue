<template>
  <div :class="$style.nav">Navbar</div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheHeader'
})
</script>


<style lang="postcss" module>
.nav {
  @apply text-green-800;
}
</style>
