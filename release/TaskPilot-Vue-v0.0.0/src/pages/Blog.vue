<template>
  <section class="container-p py-12">
    <h1 class="text-3xl font-bold">部落格</h1>
    <p class="mt-2 text-neutral-600 dark:text-neutral-300">
      分享轉換率優化、前端效能與上架經驗談。
    </p>

    <ul class="mt-6 grid md:grid-cols-2 gap-6">
      <li class="card p-6">
        <router-link class="text-xl font-semibold" to="/blog/hello-taskpilot">Hello TaskPilot</router-link>
        <p class="mt-2 text-neutral-600 dark:text-neutral-300">為何用模版能更快獲得第一個轉換？</p>
      </li>
      <li class="card p-6">
        <router-link class="text-xl font-semibold" to="/blog/how-we-boost-conversion">如何提升轉換</router-link>
        <p class="mt-2 text-neutral-600 dark:text-neutral-300">從首屏到 CTA 的 5 個細節。</p>
      </li>
    </ul>
  </section>
</template>
