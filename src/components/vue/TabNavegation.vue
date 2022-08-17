<template>
  <div
    class="flex flex-col lg:flex-row container mx-auto mt-16 justify-start items-start min-h-[800px]"
    id="atuations"
  >
    <section
      class="flex flex-col justify-center items-center w-full lg:w-1/2 py-16 lg:p-0 gap-8 lg:justify-start"
    >
      <h2 class="font-bold font-serif text-4xl lg:hidden">Áreas de atuação</h2>
      <img src="/images/law-statue.png" class="w-full" alt="Estatua da lei" />
    </section>
    <section class="mx-auto w-11/12 lg:w-1/2">
      <h2
        class="hidden text-center font-extrabold text-gray-900 font-serif my-4 text-4xl lg:block"
      >
        Áreas de Atuação
      </h2>
      <div
        class="flex rounded-md overflow-hidden h-16 lg:w-11/12 lg:h-14 m-auto"
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
      <div class="w-11/12 m-auto">
        <div v-show="isActiveTab('criminal')" class="bg-white">
          <div class="w-full mx-auto py-6">
            <div
              class="w-full max-w-3xl mx-auto border-y border-solid border-gray-200 pb-6"
            >
              <dl class="space-y-6 divide-y divide-gray-200">
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer gap-8"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acompanhamento de flagrantes e mandados de busca e
                      apreensão;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acompanhamentos em oitivas;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Defesa/investigação preliminar;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Oferecimento de Notitia Criminis;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Pedido de Instauração de Inquérito Policial;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Registro de Ocorrência Policial;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Audiência de instrução e julgamento;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Resposta à Acusação;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Defesas Processuais;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Impetração de Mandado de Segurança e Habeas Corpus;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Agravos;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Recurso em Sentido Estrito;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Apelação;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Recurso Especial e Extraordinário;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Saída Temporária;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Progressão de Regime;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Prisão Domiciliar;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Remição;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Detração;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Indulto;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Comutação;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Lavagem de Capitais;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes Empresariais/Corporativos;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Ordem Econômica e Tributária;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Sonegação Fiscal;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra as Relações de Consumo;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Responsabilidade de Agentes Públicos;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Direito Penal Médico;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Administração da Justiça;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra o Patrimônio;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Organização do Trabalho;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Vida (Tribunal do Júri);
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de Estelionato;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes contra a Honra;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes Ambientais;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Crimes de trânsito;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
          <div class="max-w-7xl mx-auto py-6">
            <div
              class="max-w-3xl mx-auto divide-y-2 border-y border-solid border-gray-200 pb-6"
            >
              <dl class="space-y-6 divide-y divide-gray-200">
                <details
                  class="pt-6 text-lg text-left w-full flex justify-between items-start text-gray-400 cursor-pointer"
                >
                  <!-- Expand/collapse question button -->
                  <summary
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Fixação;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Revisão;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Execução;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Litigioso;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Consensual;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Judicial;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Unilateral;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Compartilhada;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Regime de Bens;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Aspectos Patrimoniais;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Direitos e Deveres dos Cônjuges;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Acordo Pré-nupcial;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">
                      Reconhecimento;
                    </p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Dissolução;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
                    class="group lg:min-w-[600px] font-medium text-gray-900 h-7 flex items-center gap-2"
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
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
                    <img
                      src="/images/check-shild.svg"
                      class="w-[18px] h-[18px]"
                    />
                    <p class="text-base text-gray-500 w-11/12">Judicial;</p>
                  </dd>
                  <dd class="mt-6 pr-12 flex gap-2 items-center">
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
        <a
          href="https://wa.me/5544991245630?text=ol%C3%A1,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20ser%20atendidof"
          target="_blank"
          class="flex items-center justify-center gap-2 rounded-full bg-gray-700 px-[22px] py-[12px] my-6 text-sm lg:text-base m-auto font-medium text-white transition-all duration-200 hover:text-gray-500 hover:bg-primary-500 hover:ring-primary-500 focus:bg-primary-600 focus:text-gray-600 focus:ring-primary-700"
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
          Entre em contato comigo agora!</a
        >
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
