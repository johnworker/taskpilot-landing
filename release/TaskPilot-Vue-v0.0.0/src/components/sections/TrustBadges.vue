<script setup>
import { ref } from 'vue';

// 你的專案若有 @ 指到 /src（見下方 vite.config.js），可保留這行；
// 若沒有別名，請改成：import { trust } from '../../config/sections';
import { trust } from '@/config/sections';

const badges = ref(Array.isArray(trust) ? trust : []);

function onImgError(e) {
  // 載入失敗 → 內建佔位，避免破圖
  const fallbackSvg =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="40" viewBox="0 0 140 40">
        <rect width="140" height="40" fill="#e5e7eb"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
              font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              font-size="12" fill="#6b7280">Logo</text>
      </svg>
    `);
  e.target.src = fallbackSvg;
}
</script>

<template>
  <section class="relative py-10 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-6 text-center">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          受到這些團隊信賴
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center">
        <template v-if="badges.length">
          <img
            v-for="(item, i) in badges"
            :key="i"
            class="h-8 w-auto opacity-70 transition hover:opacity-100 dark:opacity-80"
            :src="item.src"
            :alt="item.alt || 'Logo'"
            loading="lazy"
            decoding="async"
            @error="onImgError"
          />
        </template>

        <!-- 沒配置也不會壞版 -->
        <template v-else>
          <div v-for="i in 6" :key="i" class="h-8 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 需要再微調可加在這裡 */
</style>
