<template>
  <section class="container-p py-12">
    <h1 class="text-3xl font-bold">功能總覽</h1>
    <p class="mt-2 text-neutral-600 dark:text-neutral-300">
      從模組化區塊到合規頁面，幫你快速打造高轉換的 SaaS 著陸頁。
    </p>

    <!-- 功能群組 -->
    <div class="mt-10 grid lg:grid-cols-3 gap-6">
      <div class="card p-6">
        <h3 class="font-semibold text-lg">模組化區塊</h3>
        <ul class="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Hero / Trust / Features / Pricing / FAQ / CTA</li>
          <li>Blog 列表與文章內頁骨架</li>
          <li>About / Contact / Privacy / Terms</li>
        </ul>
      </div>

      <div class="card p-6">
        <h3 class="font-semibold text-lg">體驗與效能</h3>
        <ul class="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>RWD + 深色模式（白字深底）</li>
          <li>Lazyload 圖片、精簡資源、最佳化排版</li>
          <li>符合 Core Web Vitals 的結構</li>
        </ul>
      </div>

      <div class="card p-6">
        <h3 class="font-semibold text-lg">表單與追蹤</h3>
        <ul class="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>Formspree / Netlify Forms 串接</li>
          <li>事件按鈕（CTA）易於加入追蹤</li>
          <li>Cookie Banner + 合規頁面</li>
        </ul>
      </div>
    </div>

    <!-- 整合品牌 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold">常見整合</h2>
      <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 opacity-80">
        <div class="card p-4 text-center">Formspree</div>
        <div class="card p-4 text-center">Netlify</div>
        <div class="card p-4 text-center">Vercel</div>
        <div class="card p-4 text-center">Plausible</div>
        <div class="card p-4 text-center">Google Analytics</div>
        <div class="card p-4 text-center">Cloudflare</div>
      </div>
    </div>

    <!-- 路線圖 / 里程碑 -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold">擴充路線</h2>
      <ol class="mt-6 space-y-4">
        <li class="card p-6">v1.0：核心頁與區塊（目前）</li>
        <li class="card p-6">v1.1：更多 Pricing 與 FAQ 版型</li>
        <li class="card p-6">v1.2：A/B 測試按鈕與事件樣板</li>
      </ol>
    </div>

    <!-- 底部 CTA -->
    <div class="mt-12 text-center">
      <router-link to="/pricing" class="btn-primary">查看定價與授權</router-link>
    </div>
  </section>
</template>
