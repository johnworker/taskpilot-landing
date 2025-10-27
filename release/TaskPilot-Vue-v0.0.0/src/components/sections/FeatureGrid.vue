<script setup>
import { features } from "../../config/sections";
</script>

<template>
  <section id="features" class="container-p py-16">
    <h2 class="text-3xl font-bold text-center">功能亮點</h2>
    <p class="mt-2 text-center text-neutral-600 dark:text-neutral-300">
      用最低學習負擔，做出能轉換的著陸頁。
    </p>

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="f in features" :key="f.title" class="card p-6">
        <div class="text-3xl">{{ f.icon }}</div>
        <h3 class="mt-3 font-semibold text-lg">{{ f.title }}</h3>
        <p class="mt-2 text-neutral-600 dark:text-neutral-300">{{ f.desc }}</p>
        <router-link :to="f.href" class="mt-4 inline-flex underline underline-offset-4">了解更多 →</router-link>
      </article>
    </div>
  </section>
</template>
