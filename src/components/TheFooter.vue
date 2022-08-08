<template>
  <footer>
    <div :class="$style.footer">
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
          © 2022 Osmar Júnior Advogado.
          <span :class="$style.breake">Todos os direitos reservados.</span>
        </span>
      </div>
      <div :class="$style.logoSection">
        <img
          src="@/icons/logo-colorful.svg"
          alt="Osmar Júnior Advogado"
          :class="$style.iconOne"
        />
        <img
          src="@/icons/lenyeg.svg"
          alt="Osmar Júnior Advogado"
          :class="$style.iconTwo"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({}); 
</script>

<style lang="postcss" module>
footer {
  @apply bg-gray-500;
}
.footer {
  @apply relative flex flex-col justify-end items-center text-gray-100 py-6 text-center lg:container lg:m-auto;
}

.socialIcons {
  @apply flex justify-around list-none p-0 lg:justify-center lg:gap-6;
}

span {
  @apply text-lg;
}

.breake {
  @apply block lg:inline;
}
.logoSection {
  @apply w-full flex justify-around gap-32 lg:gap-0 items-center py-6 border lg:p-0;
}

.iconOne {
  @apply lg:absolute lg:left-4 lg:top-16;
}

.iconTwo {
  @apply lg:absolute lg:right-4 lg:top-16;
}
</style>
