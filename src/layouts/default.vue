<template>
  <header>
    <div class="flex justify-center items-center">
      <HelloWorld :msg="$frontmatter.title" />
    </div>
  </header>
  <slot />
</template>
