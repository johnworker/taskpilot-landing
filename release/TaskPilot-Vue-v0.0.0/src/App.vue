<script setup>
import { onMounted } from "vue";

// 兩種寫法擇一即可；為避免未來改動導致錯誤，保留容錯：
import defaultUseAnalytics, { useAnalytics as namedUseAnalytics } from "./composables/useAnalytics";

// 取到正確的 useAnalytics 實體
const useAnalytics = namedUseAnalytics || defaultUseAnalytics;
const { bindClicks } = useAnalytics();

// 你的既有佈局
import SiteHeader from "./components/layout/SiteHeader.vue";
import SiteFooter from "./components/layout/SiteFooter.vue";
import CookieBanner from "./components/common/CookieBanner.vue";

// 新增：黏附 CTA 與 回頂
import StickyCTA from "./components/sections/StickyCTA.vue";
import GoTop from "./components/common/GoTop.vue";

// 綁定 analytics 點擊
onMounted(() => {
  bindClicks(document);
});
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <SiteFooter />
  </div>

  <!-- 全站固定：底部黏附 CTA 與 回頂 -->
  <StickyCTA />
  <GoTop />

  <CookieBanner />
</template>
