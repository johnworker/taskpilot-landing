<script setup>
import { ref } from "vue";
import { pricing } from "../../config/sections";
const billing = ref("monthly"); // 'monthly' | 'yearly'
</script>

<template>
  <section id="pricing" class="container-p py-16">
    <div class="flex items-center justify-center gap-2">
      <button class="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10"
              :class="billing==='monthly' ? 'bg-brand text-white' : ''"
              @click="billing='monthly'">月付</button>
      <button class="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10"
              :class="billing==='yearly' ? 'bg-brand text-white' : ''"
              @click="billing='yearly'">年付 <span class="opacity-80">(省 2 個月)</span></button>
    </div>

    <!-- 錨點：購買區 -->
    <div id="buy" class="mt-8 grid md:grid-cols-3 gap-6">
      <div v-for="t in pricing.tiers" :key="t.name"
           class="card p-6 border"
           :class="t.popular ? 'ring-2 ring-brand' : 'ring-1 ring-neutral-200 dark:ring-white/10'">
        <div class="flex items-baseline justify-between">
          <div>
            <h3 class="text-xl font-semibold">{{ t.name }}</h3>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">{{ t.tagline }}</p>
          </div>
          <span class="text-3xl font-bold">
            ${{ billing==='monthly' ? t.monthly : t.yearly }}
          </span>
        </div>

        <ul class="mt-4 space-y-2">
          <li v-for="f in t.features" :key="f" class="flex items-center gap-2">✔️ <span>{{ f }}</span></li>
        </ul>

        <a :href="t.cta" class="btn-primary mt-6 w-full text-center"
           :data-analytics="`buy_${t.name.toLowerCase()}_${billing}`">
          開始使用
        </a>
      </div>
    </div>
  </section>
</template>
