<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div :class="$style.mainContent">
    <div :class="$style.layerOne">
      <div :class="$style.layerTwo">
        <h2 :class="$style.title">Áreas de Atuação</h2>
        <img src="@/assets/law-statue.png" alt="" />
        <dl :class="$style.occupationList">
          <Disclosure
            v-for="faq in faqs"
            :key="faq.question"
            v-slot="{ open }"
            as="div"
            :class="$style.occupationLayerOne"
          >
            <dt :class="$style.occupationLayerTwo">
              <DisclosureButton :class="$style.occupationButton">
                <span :class="$style.buttonText">
                  {{ faq.question }}
                </span>
                <span :class="$style.buttonIcon">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" :class="$style.occupationItem">
              <p :class="$style.occupationItemText">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline/index.js";

const faqs = [
  {
    question: "Delegacia de Polícia - Ministério Público",
    answer: "Acompanhamento de flagrantes e mandados de busca e apreensão;",
  },
  {
    question: "Delegacia de Polícia - Ministério Público",
    answer: "Acompanhamento de flagrantes e mandados de busca e apreensão;",
  },
  {
    question: "Delegacia de Polícia - Ministério Público",
    answer: "Acompanhamento de flagrantes e mandados de busca e apreensão;",
  },
  {
    question: "Delegacia de Polícia - Ministério Público",
    answer: "Acompanhamento de flagrantes e mandados de busca e apreensão;",
  },
  // More questions...
];
</script>

<style lang="postcss" module>
.mainContent {
  @apply bg-white;
}

.layerOne {
  @apply max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8;
}

.layerTwo {
  @apply flex flex-col items-center max-w-3xl mx-auto divide-y-2 divide-gray-200;
}

.title {
  @apply text-center text-3xl font-extrabold text-gray-900 sm:text-4xl;
}

.occupationList {
  @apply mt-6 space-y-6 divide-y divide-gray-200 w-11/12;
}

.occupationLayerOne {
  @apply p-0 pt-6 border-b-[1px] border-gray-900;
}

.occupationLayerTwo {
  @apply text-lg;
}

.occupationButton {
  @apply text-left w-full flex justify-between items-start bg-transparent border-none text-gray-400 cursor-pointer;
}

.buttonText {
  @apply font-medium text-gray-900;
}

.buttonIcon {
  @apply ml-6 h-7 flex items-center;
}

.occupationItem {
  @apply mt-2;
}

.occupationItemText {
  @apply text-xs text-gray-500;
}
</style>
