<script setup>
import { trust } from "../../config/sections";
</script>

<template>
  <section class="container-p py-10">
    <p class="text-center text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
      受到這些團隊信賴
    </p>
    <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-80">
      <img v-for="l in trust" :key="l.alt" :src="l.src" :alt="l.alt"
           class="h-8 mx-auto dark:invert" loading="lazy">
    </div>
  </section>
</template>
