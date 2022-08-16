<template>
  <Popover id="popover">
    <div class="px-4 sm:px-6 bg-gray-500">
      <nav
        class="relative flex items-center justify-between gap-6 sm:h-10"
        aria-label="Global"
      >
        <div
          class="flex w-full flex-1 items-center justify-between lg:w-auto lg:flex-none"
        >
          <a href="/">
            <span class="sr-only">Osmar Júnior - Advogado</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="/images/logoHorizontal.png"
              alt="Osmar Júnior - Advogado"
            />
          </a>
          <div class="ml-auto flex items-center lg:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md bg-gray-600 p-2 text-white transition-all hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
            >
              <span class="sr-only">Abrir menu principal</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div
          class="hidden items-center justify-end gap-x-3 whitespace-nowrap lg:flex xl:gap-x-6"
        >
          <a
            v-for="item in navigation.slice(0, navigation.length - 1)"
            :key="item.name"
            :href="item.href"
            class="relative origin-center font-medium text-white transition-colors duration-300 hover:text-primary-500"
            >{{ item.name }}</a
          >
          <a
            v-for="item in [navigation[navigation.length - 1]]"
            :key="item.name"
            :href="item.href"
            target="_blank"
            class="flex items-center gap-2 rounded-full bg-gray-700 px-[28.5px] py-[10px] font-medium text-white transition-all duration-200 hover:text-gray-500 hover:bg-primary-500 hover:ring-primary-500 focus:bg-primary-600 focus:text-gray-600 focus:ring-primary-700"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.546 2.908A9.817 9.817 0 0 0 10.538 0C5.077 0 .63 4.448.624 9.908c0 1.748.458 3.45 1.321 4.956L.545 20 5.8 18.622a9.918 9.918 0 0 0 4.737 1.207h.005c5.46 0 9.908-4.448 9.913-9.913a9.872 9.872 0 0 0-2.91-7.008h.001ZM10.538 18.15a8.217 8.217 0 0 1-4.195-1.15l-.3-.18-3.118.818.833-3.041-.195-.314a8.2 8.2 0 0 1-1.26-4.381c0-4.533 3.697-8.23 8.24-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.005 4.549-3.702 8.24-8.24 8.24Zm4.518-6.167c-.246-.124-1.462-.723-1.691-.808-.228-.081-.394-.123-.556.124-.166.246-.641.807-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.231-.738-.656-1.232-1.469-1.38-1.715-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.308-.009-.475-.009a.911.911 0 0 0-.661.309c-.227.248-.864.846-.864 2.068 0 1.22.888 2.394 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"
                fill="currentColor"
              />
            </svg>
            {{ item.name }}</a
          >
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div class="bg-gray-500">
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition lg:hidden"
        >
          <div
            class="overflow-hidden rounded-lg bg-gray-500 shadow-md ring-1 ring-gray-900 ring-opacity-5"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="/images/logoHorizontal.png"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-600 transition-all duration-200 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  <span class="sr-only">Fechar menu principal</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="space-y-1 px-2 pt-2 pb-3">
              <a
                v-for="item in navigation.slice(0, navigation.length - 1)"
                :key="item.name"
                :href="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-white transition-all hover:text-primary-500"
                >{{ item.name }}</a
              >
            </div>
            <a
              v-for="item in [navigation[navigation.length - 1]]"
              :key="item.name"
              :href="item.href"
              target="_blank"
              class="flex items-center justify-center bg-white px-[28.5px] py-[10px] font-medium text-gray-500 transition-all duration-200 hover:text-gray-500 hover:bg-primary-500 hover:ring-primary-500 focus:bg-primary-600 focus:text-gray-600 focus:ring-primary-700"
              >{{ item.name }}</a
            >
          </div>
        </PopoverPanel>
      </div>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline/index.js";

const navigation = [
  { name: "Áreas de Atuação", href: "/#atuations" },
  { name: "Depoimentos", href: "/#costumers" },
  { name: "Onde me Encontrar", href: "/#localization" },
  {
    name: "Atendimento",
    href: "https://wa.me/5544991245630?text=ol%C3%A1,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20ser%20atendido",
  },
];
</script>
