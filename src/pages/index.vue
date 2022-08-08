<!-- eslint-disable vue/multi-word-component-names -->
<page>
  title: Osmar Júnior
</page>

<template>
  <div :class="$style.section">
    <TheNavbar client:visible />
    <TheHeader />
    <TheOccupation client:visible />
    <Customers />
    <TheLocalization />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style lang="postcss" module>
.section {
  @apply bg-gray-500 p-0 m-0 font-sans;
}
</style>
