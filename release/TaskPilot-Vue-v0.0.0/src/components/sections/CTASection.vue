<script setup>
import { cta } from "../../config/sections";
/* 主要 CTA 指向 /pricing#buy，次要 CTA 指向 /contact */
const primaryHref = "/pricing#buy";
const secondaryTo = "/contact";
</script>

<template>
  <section class="container-p py-16">
    <div class="card p-8 text-center">
      <h3 class="text-2xl font-bold">{{ cta.title }}</h3>
      <p class="mt-2 text-neutral-600 dark:text-neutral-300">{{ cta.desc }}</p>
      <div class="mt-6 flex flex-wrap gap-3 justify-center">
        <router-link :to="primaryHref" class="btn-primary" id="cta-primary" data-analytics="cta_primary">
          立刻開始
        </router-link>
        <router-link :to="secondaryTo"
          class="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3"
          id="cta-secondary" data-analytics="cta_need_help">
          需要協助
        </router-link>
      </div>
    </div>
  </section>
</template>
