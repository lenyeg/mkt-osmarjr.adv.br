<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div :class="$style.mainContent">
    <div :class="$style.layerOne">
      <Popover>
        <div :class="$style.layerTwo">
          <nav :class="$style.navbar" aria-label="Global">
            <div :class="$style.navContentLayerOne">
              <div :class="$style.navContentLayerTwo">
                <a href="#">
                  <span :class="$style.srOnly">Workflow</span>
                  <img
                    :class="$style.logo"
                    src="@/icons/logo-colorful.svg"
                    alt=""
                  />
                </a>
                <div :class="$style.buttonLayerOne">
                  <PopoverButton :class="$style.buttonLayerTwo">
                    <span :class="$style.srOnly">Open main menu</span>
                    <MenuIcon :class="$style.menuIcon" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div :class="$style.desktopMenu">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="$style.desktopMenuItem"
                >{{ item.name }}</a
              >
            </div>
            <div :class="$style.buttonLoginLayerOne">
              <span :class="$style.buttonLoginLayerTwo">
                <a href="#" :class="$style.contactLink">Contate-me agora!</a>
              </span>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel focus :class="$style.menuMobileLayerOne">
            <div :class="$style.menuMobileLayerTwo">
              <div :class="$style.menuMobileLayerTree">
                <div>
                  <img
                    :class="$style.menuIconMobile"
                    src="@/icons/logo-colorful.svg"
                    alt=""
                  />
                </div>
                <div :class="$style.mobileMenuIconLayerOne">
                  <PopoverButton :class="$style.mobileMenuIconLayerTwo">
                    <span :class="$style.srOnly">Close menu</span>
                    <XIcon :class="$style.menuIcon" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div :class="$style.mobileMenuSection">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="$style.mobileMenuItem"
                  >{{ item.name }}</a
                >
              </div>
              <a href="#" :class="$style.mobileContactButton"
                >Contate-me agora!</a
              >
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline/index.js";

const navigation = [
  { name: "Áreas de Atuação", href: "#" },
  { name: "Depoimentos", href: "#" },
  { name: "Onde me Encontrar", href: "#" },
];
</script>

<style lang="postcss" module>
.mainContent {
  @apply relative;
}
.layerOne {
  @apply relative py-6;
}

.layerTwo {
  @apply container mx-auto px-4 sm:px-6;
}

.navbar {
  @apply relative flex items-center justify-between sm:h-10 lg:justify-end;
}

.navContentLayerOne {
  @apply flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0;
}

.navContentLayerTwo {
  @apply flex items-center justify-between px-3 w-full lg:w-auto;
}

.srOnly {
  @apply sr-only;
}

.logo {
  @apply h-8 w-auto sm:h-10;
}

.buttonLayerOne {
  @apply -mr-2 flex items-center lg:hidden;
}

.buttonLayerTwo {
  @apply bg-gray-500 rounded-lg p-2 inline-flex items-center justify-center text-white border border-solid border-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500;
}

.menuIcon {
  @apply h-8 w-auto;
}

.menuIconMobile {
  @apply h-8 w-auto max-w-[168px];
}

.desktopMenu {
  @apply hidden lg:flex lg:space-x-5 lg:mr-48;
}

.desktopMenuItem {
  @apply font-medium text-white duration-300 no-underline hover:text-primary-600;
}

.buttonLoginLayerOne {
  @apply hidden lg:absolute lg:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0;
}

.buttonLoginLayerTwo {
  @apply inline-flex rounded-full shadow;
}

.contactLink {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-base rounded-full duration-300 text-white bg-gray-700 hover:text-gray-700 hover:bg-primary-500 no-underline;
}

.menuMobileLayerOne {
  @apply absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden;
}

.menuMobileLayerTwo {
  @apply rounded-lg shadow-lg bg-gray-500 ring-1 ring-gray-500 ring-opacity-5 overflow-hidden;
}

.menuMobileLayerTree {
  @apply px-5 pt-4 flex items-center justify-between;
}

.mobileMenuIconLayerOne {
  @apply -mr-2;
}

.mobileMenuIconLayerTwo {
  @apply bg-gray-500 rounded-lg p-2 inline-flex items-center justify-center border border-solid border-white text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500;
}

.mobileMenuSection {
  @apply px-2 pt-2 pb-3;
}

.mobileMenuItem {
  @apply block px-3 py-2 rounded-lg text-base font-medium text-white duration-300 hover:text-primary-600 hover:bg-gray-400 no-underline;
}

.mobileContactButton {
  @apply block w-full py-3 text-center font-medium text-gray-800 bg-white duration-300 hover:bg-primary-500 no-underline;
}
</style>
