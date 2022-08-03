<template>
  <div :class="$style.localSection">
    <address>
      <div :class="$style.addressItem">
        <img src="" alt="" /> Rua do Brasil, O - Maringá (PR)
      </div>
      <div :class="$style.addressItemTwo">
        <img src="" alt="" /> (44) 9 9124-5630
      </div>
      <div :class="$style.addressItem">
        <img src="" alt="" /> contato@osmarjr.adv.br
      </div>
    </address>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss" module>
.localSection {
  @apply w-full h-96 relative;
}

address {
  @apply absolute bottom-4 left-4 right-4 bg-white flex flex-col rounded-lg shadow-md;
}

.addressItem {
  @apply p-2;
}

.addressItemTwo {
  @apply p-2 border border-gray-900;
}
</style>
