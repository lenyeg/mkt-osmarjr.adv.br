<template>
  <div
    class="flex flex-col lg:flex-row container mx-auto mt-16 justify-start items-start"
    id="atuations"
  >
    <section
      class="flex flex-col justify-center items-center w-full lg:w-1/2 py-16 lg:p-0 gap-8 lg:justify-start"
    >
      <h2 class="font-bold font-serif text-4xl lg:hidden">Áreas de atuação</h2>
      <img src="/images/law-statue.png" class="w-full" alt="Estatua da lei" />
    </section>
    <section class="mx-auto w-11/12">
      <h2
        class="hidden text-center font-extrabold text-gray-900 font-serif my-4 text-4xl lg:block"
      >
        Áreas de Atuação
      </h2>
      <div
        class="flex rounded-md overflow-hidden h-16 lg:w-9/12 lg:h-14 m-auto"
      >
        <button
          @click="makeActive('criminal')"
          :class="{ btn: true, actived: activedTab === 'criminal' }"
        >
          Direito Criminal
        </button>
        <button
          @click="makeActive('family')"
          :class="{ btn: true, actived: activedTab === 'family' }"
        >
          Direito de Família
        </button>
      </div>
      <div class="w-11/12 m-auto max-w-7xl">
        <div v-show="isActiveTab('criminal')" class="bg-white">
          <div class="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div
              class="w-full max-w-3xl mx-auto divide-y-2 divide-gray-200 border-t border-solid border-gray-500"
            >
              <dl class="space-y-6 divide-y divide-gray-200">
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Delegacia de Polícia - M. Público
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acompanhamento de flagrantes e mandados de busca e
                      apreensão;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acompanhamentos em oitivas;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Defesa/investigação preliminar;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Oferecimento de Notitia Criminis;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Pedido de Instauração de Inquérito Policial;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Registro de Ocorrência Policial;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Medidas Protetivas de Urgência – Lei Maria da Penha;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Processo Penal
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Audiência de instrução e julgamento;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Resposta à Acusação;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Defesas Processuais;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Impetração de Mandado de Segurança e Habeas Corpus;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Pedido de revogação de prisão preventiva;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Fase Recursal
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Agravos;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Recurso em Sentido Estrito;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Apelação;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Recurso Especial e Extraordinário;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Sustentação Oral;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Execução Penal
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Saída Temporária;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Progressão de Regime;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Prisão Domiciliar;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Remição;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Detração;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Indulto;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Comutação;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Livramento Condicional;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Áreas Específicas
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Lavagem de Capitais;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes Empresariais/Corporativos;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Ordem Econômica e Tributária;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Sonegação Fiscal;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra as Relações de Consumo;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Responsabilidade de Agentes Públicos;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Direito Penal Médico;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Administração da Justiça;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra o Patrimônio;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Organização do Trabalho;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Vida (Tribunal do Júri);
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Estelionato;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Honra;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes Ambientais;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de trânsito;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Ações Penais Originárias;
                    </p>
                  </dd>
                </details>
                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
        <div v-show="isActiveTab('family')" class="bg-white">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div
              class="max-w-3xl mx-auto divide-y-2 divide-gray-200 border-t border-solid border-gray-500"
            >
              <dl class="space-y-6 divide-y divide-gray-200">
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Pensão Alimentícia
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Fixação;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Revisão;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Execução;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Exoneração;</p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Divórcio
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Litigioso;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Consensual;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Judicial;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Extrajudicial (Cartório);
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Guarda e Regulamentação de Visita
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Unilateral;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Compartilhada;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Alternada;</p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Casamento
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Regime de Bens;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Aspectos Patrimoniais;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Direitos e Deveres dos Cônjuges;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acordo Pré-nupcial;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Anulação de Casamento;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    União Estável e Investigação de Paternidade
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Reconhecimento;
                    </p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Dissolução;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Investigação da Identidade Biológica;
                    </p>
                  </dd>
                </details>
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center justify-between"
                  >
                    Inventário
                    <svg
                      class="group-open:open:rotate-180 rotate-0 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Judicial;</p>
                  </dd>
                  <dd class="mt-2 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Extrajudicial;
                    </p>
                  </dd>
                </details>
                <!-- More questions... -->
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    activedTab: "criminal",
  }),
  methods: {
    makeActive(tab) {
      this.activedTab = tab;
    },
    isActiveTab(tab) {
      return this.activedTab === tab;
    },
  },
});
</script>

<style>
.btn {
  width: 50%;
  background-color: #eaebec;
  color: #283741;
  padding: 0;
}

.actived {
  width: 50%;
  background-color: #283741;
  color: #eaebec;
  padding: 0;
}
</style>
