<template>
  <header :class="$style.headerSection">
    <section :class="$style.content">
      <article :class="$style.leading">
        <h1>
          Osmar Júnior <br />
          Advogado
        </h1>
        <p>
          Formado na UNICESUMAR em 2019, aprovado no primeiro exame da ordem
          enquanto ainda quintanista, pós-graduado em Docência no Ensino
          Superior pela FCV e pós-graduando em Prática Penal Avançada pela
          Damásio.
        </p>
        <span>OAB/PR 103.959</span>
        <a href="" :class="$style.whatsCTA"> Contate-me agora! </a>
      </article>
      <img src="@/assets/osmar.png" alt="" />
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheHeader",
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
});
</script>

<style lang="postcss" module>
.headerSection {
  @apply flex flex-col text-white relative;
}
.navbar {
  @apply flex justify-between container px-2 m-auto;
}

button {
  @apply z-50 w-12 h-12;
}

.content {
  @apply flex flex-col items-center gap-2 my-9 mx-4 text-center lg:flex-row lg:justify-between lg:text-left lg:container lg:mx-auto;
}
.leading {
  @apply flex flex-col items-center text-lg gap-2 my-9 mx-4 lg:items-start lg:max-w-md;
}

.leading h1 {
  @apply text-4xl font-black m-0;
}

.whatsCTA {
  @apply flex justify-around items-center m-auto my-2 w-1/2 text-center bg-white text-gray-500 p-2 rounded-full no-underline duration-300 hover:bg-primary-500 lg:m-0 lg:my-4;
}
</style>
