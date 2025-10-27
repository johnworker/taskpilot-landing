<script setup>
import { ref } from "vue";

const tabs = [
  { key: "dev", name: "開發體驗", points: [
    "Vite + Tailwind 結構清晰",
    "模組化元件與區塊，易複用",
    "表單免後端串接",
  ]},
  { key: "ux", name: "轉換與體驗", points: [
    "RWD + 深色模式（白字深底）",
    "明確 CTA 與價錢表",
    "FAQ 化解常見反對點",
  ]},
  { key: "perf", name: "效能與 SEO", points: [
    "Lazyload 圖片與最佳化資源",
    "FAQ JSON-LD 結構化資料",
    "robots.txt / sitemap.xml",
  ]},
];
const active = ref(tabs[0].key);
</script>

<template>
  <section class="container-p py-12">
    <div class="flex flex-wrap gap-2">
      <button v-for="t in tabs" :key="t.key"
        class="px-4 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10"
        :class="active===t.key ? 'bg-brand text-white' : ''"
        @click="active=t.key">
        {{ t.name }}
      </button>
    </div>

    <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="t in tabs" :key="t.key" v-show="active===t.key" class="md:col-span-2 lg:col-span-3">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="p in t.points" :key="p" class="card p-6">
            <h3 class="font-semibold">✔️ {{ p }}</h3>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              提供可上架的實作樣式、語意結構與易用性。
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
