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
                    src="@/icons/logo-dark.svg"
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
                <a href="#" :class="$style.loginLink"> Log in </a>
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
                    src="@/icons/logo-dark.svg"
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
              <a href="#" :class="$style.mobileLoginButton"> Log in </a>
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
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
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
  @apply max-w-7xl mx-auto px-4 sm:px-6;
}

.navbar {
  @apply relative flex items-center justify-between sm:h-10 md:justify-center;
}

.navContentLayerOne {
  @apply flex items-center flex-1 md:absolute md:inset-y-0 md:left-0;
}

.navContentLayerTwo {
  @apply flex items-center justify-between px-3 w-full md:w-auto;
}

.srOnly {
  @apply sr-only;
}

.logo {
  @apply h-8 w-auto sm:h-10;
}

.buttonLayerOne {
  @apply -mr-2 flex items-center md:hidden;
}

.buttonLayerTwo {
  @apply bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500;
}

.menuIcon {
  @apply h-8 w-auto;
}

.menuIconMobile {
  @apply h-8 w-auto max-w-[168px];
}

.desktopMenu {
  @apply hidden md:flex md:space-x-10;
}

.desktopMenuItem {
  @apply font-medium text-gray-500 hover:text-gray-900 no-underline;
}

.buttonLoginLayerOne {
  @apply hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0;
}

.buttonLoginLayerTwo {
  @apply inline-flex rounded-md shadow;
}

.loginLink {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50;
}

.menuMobileLayerOne {
  @apply absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden;
}

.menuMobileLayerTwo {
  @apply rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden;
}

.menuMobileLayerTree {
  @apply px-5 pt-4 flex items-center justify-between;
}

.mobileMenuIconLayerOne {
  @apply -mr-2;
}

.mobileMenuIconLayerTwo {
  @apply bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500;
}

.mobileMenuSection {
  @apply px-2 pt-2 pb-3;
}

.mobileMenuItem {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 no-underline;
}

.mobileLoginButton {
  @apply block w-full py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 no-underline;
}
</style>
