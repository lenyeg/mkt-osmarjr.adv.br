<template>
  <div :class="$style.menuSection">
    <img src="svg/logo-dark.svg" alt="" :class="$style.logo" />

    <ul :class="$style.menuMobile">
      <li>Sobre Mim</li>
      <li>Áreas de Atuação</li>
      <li>Depoimentos</li>
      <li>Onde me Encontrar</li>
    </ul>
    <div :class="$style.wppSection">botão whatsapp</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheNavbar",
});
</script>

<style lang="postcss" module>
.menuSection {
  @apply bg-white rounded-lg m-2 text-lg;
}

.logo {
  @apply p-2;
}

.menuMobile {
  @apply list-none flex flex-col gap-2 p-2;
}

.wppSection {
  @apply bg-gray-500 w-full rounded-b-lg flex items-center justify-center py-2;
}
</style>
