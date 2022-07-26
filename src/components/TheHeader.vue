<template>
  <div :class="$style.nav">Navbar</div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="postcss" module>
.nav {
  @apply text-green-800;
}
</style>
