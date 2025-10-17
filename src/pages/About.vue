<template>
  <section class="container-p py-12">
    <h1 class="text-3xl font-bold">關於我們</h1>
    <p class="mt-2 text-neutral-600 dark:text-neutral-300">
      我們專注於打造高轉換的前端模板，幫助產品更快上線。
    </p>

    <div class="mt-8 grid lg:grid-cols-3 gap-6">
      <div class="card p-6">
        <h3 class="font-semibold">使命</h3>
        <p class="mt-2 text-sm">讓每個團隊都能用上優秀的著陸頁，專注產品本身。</p>
      </div>
      <div class="card p-6">
        <h3 class="font-semibold">價值觀</h3>
        <p class="mt-2 text-sm">簡潔、美觀、效能、可維護。</p>
      </div>
      <div class="card p-6">
        <h3 class="font-semibold">里程碑</h3>
        <ul class="mt-2 text-sm space-y-1">
          <li>2025 Q1：推出 Vue 版</li>
          <li>2025 Q2：上線 React/HTML 版本</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 text-center">
      <router-link to="/contact" class="btn-primary">與我們聯繫</router-link>
    </div>
  </section>
</template>
