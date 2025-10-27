<script setup>
import { faqs } from "../../config/sections";
</script>

<template>
  <section class="container-p py-16">
    <h2 class="text-3xl font-bold">常見問題</h2>
    <div class="mt-6 space-y-4">
      <details v-for="f in faqs" :key="f.q" class="card p-5">
        <summary class="cursor-pointer font-medium">{{ f.q }}</summary>
        <p class="mt-2 text-neutral-600 dark:text-neutral-300">{{ f.a }}</p>
      </details>
    </div>
  </section>
</template>
