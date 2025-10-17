<script setup>
import { useSite } from "../../config/useSite";
const { site } = useSite();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="mt-16 border-t">
    <div class="container-p py-12 grid gap-8 md:grid-cols-4">
      <!-- 品牌 -->
      <div class="md:col-span-2">
        <router-link to="/" class="text-xl font-bold">{{ site.name }}</router-link>
        <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{{ site.tagline }}</p>
      </div>

      <!-- 導覽 -->
      <nav>
        <h3 class="text-sm font-semibold">導覽</h3>
        <ul class="mt-3 space-y-2 text-sm">
          <li><router-link to="/features">功能</router-link></li>
          <li><router-link to="/pricing">定價</router-link></li>
          <li><router-link to="/blog">部落格</router-link></li>
          <li><router-link to="/about">關於</router-link></li>
        </ul>
      </nav>

      <!-- 法務 -->
      <nav>
        <h3 class="text-sm font-semibold">法務</h3>
        <ul class="mt-3 space-y-2 text-sm">
          <li><router-link :to="site.legal.privacy">隱私權政策</router-link></li>
          <li><router-link :to="site.legal.terms">服務條款</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="container-p py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
      <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
      <div class="mt-3 md:mt-0 flex items-center gap-4">
        <a :href="site.links.twitter" aria-label="Twitter">Twitter</a>
        <a :href="site.links.github" aria-label="GitHub">GitHub</a>
        <router-link :to="site.links.contact">Contact</router-link>
        <!-- 也在 Footer 放一個直接購買的入口 -->
        <router-link to="/pricing#buy" class="btn-primary no-hover-scale" id="footer-cta" data-analytics="cta_footer_free_start">
          免費開始
        </router-link>
      </div>
    </div>
  </footer>
</template>
