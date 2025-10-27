<script setup>
const ACTION = "https://formspree.io/f/YOUR_ID"; // 或改成你自己的收集服務
</script>

<template>
  <section class="container-p py-12">
    <div class="card p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <div class="text-center md:text-left">
        <h3 class="text-xl font-semibold">取得新模板與優惠通知</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-300">不亂發信，每月 1–2 封精選內容。</p>
      </div>
      <form :action="ACTION" method="POST" class="flex-1 flex gap-2 w-full md:w-auto">
        <input type="email" name="email" required placeholder="你的 Email"
               class="flex-1 min-w-0 dark:text-neutral-900">
        <button class="btn-primary">訂閱</button>
      </form>
    </div>
  </section>
</template>
