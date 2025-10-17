<script setup>
import { metrics } from "../../config/sections";
</script>

<template>
  <section class="container-p pt-2 pb-10">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="m in metrics" :key="m.label" class="text-center">
        <div class="text-3xl font-bold">{{ m.value }}</div>
        <div class="text-sm text-neutral-600 dark:text-neutral-300">{{ m.label }}</div>
      </div>
    </div>
  </section>
</template>
