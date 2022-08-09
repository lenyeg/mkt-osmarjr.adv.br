<template>
  <div :class="$style.globalContent">
    <div :class="$style.mainContent">
      <h2 :class="$style.title">O que dizem meus clientes</h2>
      <div :class="$style.container">
        <div :class="$style.card">
          <img src="@/assets/pedro.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            lacus, rutrum in turpis non, interdum tincidunt lacus.”
          </p>
          <span>Pedro Henrique</span>
        </div>
        <div :class="$style.card">
          <img src="@/assets/lucas.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            lacus, rutrum in turpis non, interdum tincidunt lacus.”
          </p>
          <span>Lucas Ribeiro</span>
        </div>
        <div :class="$style.card">
          <img src="@/assets/ana.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            lacus, rutrum in turpis non, interdum tincidunt lacus.”
          </p>
          <span>Ana Longhini</span>
        </div>
        <div :class="$style.card">
          <img src="@/assets/andre.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            lacus, rutrum in turpis non, interdum tincidunt lacus.”
          </p>
          <span>André Van Dal</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="postcss" module>
.globalContent {
  @apply bg-gray-50 w-full;
}
.mainContent {
  @apply bg-gray-50 text-gray-800 py-16 flex flex-col justify-center items-center lg:container lg:m-auto;
}

.title {
  @apply text-center text-3xl font-extrabold text-gray-900 sm:text-4xl;
}
.container {
  @apply flex overflow-x-scroll snap-mandatory max-w-[22.5rem] lg:max-w-full;
}

.card {
  @apply flex flex-col justify-center items-center text-center bg-white mx-4 rounded-md p-4 shadow-md min-w-[224px] w-56 h-72;
}

span {
  @apply font-bold text-base;
}

::-webkit-scrollbar {
  @apply hidden lg:block;
}
</style>
