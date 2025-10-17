<template>
  <section class="container-p py-12">
    <h1 class="text-3xl font-bold">定價方案</h1>
    <p class="mt-2 text-neutral-600 dark:text-neutral-300">一次購買，永久使用，含更新。</p>

    <!-- 定價表（沿用組件） -->
    <div class="mt-8">
      <PricingTable />
    </div>

    <!-- 比較表（可自訂） -->
    <div class="mt-12 overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left">
            <th class="p-3">功能</th>
            <th class="p-3">Starter</th>
            <th class="p-3">Pro</th>
            <th class="p-3">Team</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <tr><td class="p-3">完整頁面套組</td><td class="p-3">✔️</td><td class="p-3">✔️</td><td class="p-3">✔️</td></tr>
          <tr><td class="p-3">商業授權</td><td class="p-3">個人/單專案</td><td class="p-3">多專案</td><td class="p-3">代理/客戶專案</td></tr>
          <tr><td class="p-3">技術支援</td><td class="p-3">Email</td><td class="p-3">優先</td><td class="p-3">SLA</td></tr>
        </tbody>
      </table>
    </div>

    <!-- FAQ（沿用組件） -->
    <FAQ />

    <!-- 底部 CTA -->
    <div class="text-center">
      <a href="#buy" class="btn-primary">立即購買</a>
    </div>
  </section>
</template>

<script setup>
import PricingTable from "../components/sections/PricingTable.vue";
import FAQ from "../components/sections/FAQ.vue";
</script>
