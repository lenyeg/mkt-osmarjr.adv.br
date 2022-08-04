<template>
  <div :class="$style.mainContainer">
    <div :class="$style.localSection">
      <div :class="$style.pin">
        <a href=""
          ><img src="@/icons/location-pin.svg" alt="Abrir no google maps"
        /></a>
      </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss" module>
.mainContainer {
  @apply bg-[url('@/assets/map.jpg')] bg-center bg-cover;
}
.localSection {
  @apply w-full h-96 relative  lg:container lg:m-auto;
}

address {
  @apply absolute bottom-4 left-4 right-4 bg-white flex flex-col rounded-lg border border-solid border-gray-100 shadow-md lg:top-6 lg:left-12 lg:bottom-auto lg:right-auto;
}

.addressItem {
  @apply p-2;
}

.addressItemTwo {
  @apply p-2 border-y border-x-0 border-solid border-gray-100;
}

.modal {
  @apply hidden;
}

.pin {
  @apply absolute top-1/4 lg:top-1/3 left-1/2;
}
</style>
