<template>
  <footer>
    <div>
      <ul :class="$style.socialIcons">
        <li>
          <a href=""
            ><img src="@/icons/facebook.svg" alt="" /><img src="" alt=""
          /></a>
        </li>
        <li>
          <a href=""><img src="@/icons/instagram.svg" alt="" /></a>
        </li>
        <li>
          <a href=""
            ><img src="" alt="" /><img src="@/icons/twitter.svg" alt=""
          /></a>
        </li>
      </ul>
      <span>
        © 2022 Osmar Júnior Advogado. <br />
        Todos os direitos reservados.
      </span>
    </div>
    <div :class="$style.logoSection">
      <img src="@/icons/logo-colorful.svg" alt="Osmar Júnior Advogado" />
      <img src="@/icons/lenyeg.svg" alt="Osmar Júnior Advogado" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="postcss" module>
footer {
  @apply flex flex-col justify-end items-center bg-gray-900 text-gray-100 h-64 text-center;
}

.socialIcons {
  @apply flex justify-around list-none p-0;
}

span {
  @apply text-lg;
}
.logoSection {
  @apply w-full flex justify-between items-center p-6 px-4 border border-t border-white;
}
</style>
