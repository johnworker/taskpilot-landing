<script setup>
import { testimonials } from "../../config/sections";
</script>

<template>
  <section class="container-p py-16">
    <h2 class="text-3xl font-bold text-center">用戶見證</h2>
    <div class="mt-8 grid md:grid-cols-3 gap-6">
      <figure v-for="t in testimonials" :key="t.author" class="card p-6">
        <blockquote class="text-neutral-700 dark:text-neutral-100">“{{ t.quote }}”</blockquote>
        <figcaption class="mt-4 text-sm text-neutral-500">{{ t.author }}</figcaption>
      </figure>
    </div>
  </section>
</template>
