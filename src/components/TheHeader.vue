<template>
  <header :class="$style.headerSection">
    <TheNavbar />
    <section>
      <article :class="$style.leading">
        <h1>
          Osmar Júnior <br />
          Advogado
        </h1>
        <span>OAB/PR 103.959</span>
      </article>
      <a href="" :class="$style.whatsCTA"> Contate-me agora! </a>
      <article :class="$style.about">
        <img src="images/osmar.png" alt="" />
        <p>
          Formado na UNICESUMAR em 2019, aprovado no primeiro exame da ordem
          enquanto ainda quintanista, pós-graduado em Docência no Ensino
          Superior pela FCV e pós-graduando em Prática Penal Avançada pela
          Damásio.
        </p>
      </article>
    </section>
  </header>
</template>

<script lang="ts">
import TheNavbar from "./TheNavbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheHeader",
  component: [TheNavbar],
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
  @apply flex flex-col text-gray-900 relative;
}
.navbar {
  @apply flex justify-between container px-2 m-auto;
}

button {
  @apply z-50 w-12 h-12;
}

.leading {
  @apply flex flex-col items-center gap-2 my-9;
}

.leading h1 {
  @apply text-4xl text-center font-black m-0;
}

.whatsCTA {
  @apply flex justify-around items-center m-auto my-2 w-1/2 text-center bg-gray-800 text-slate-50 p-1 px-2 rounded-full no-underline;
}

.about {
  @apply flex flex-col items-center gap-2 my-9;
}

.about p {
  @apply text-center p-4;
}
</style>
