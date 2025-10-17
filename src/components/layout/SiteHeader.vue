<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const open = ref(false);
const route = useRoute();

function toggleMenu() { open.value = !open.value; }
function isActive(path) { return route.path === path; }

/* 深色切換（記憶在 localStorage） */
function toggleDark() {
  document.documentElement.classList.toggle("dark");
  const v = document.documentElement.classList.contains("dark") ? "1" : "0";
  localStorage.setItem("tp_dark", v);
}
onMounted(() => {
  const dark = localStorage.getItem("tp_dark") === "1";
  if (dark) document.documentElement.classList.add("dark");
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b dark:bg-neutral-950/80">
    <nav class="container-p h-16 flex items-center justify-between">
      <router-link to="/" class="font-bold" aria-label="TaskPilot Home">TaskPilot</router-link>

      <!-- 桌面導覽 -->
      <ul class="hidden md:flex items-center gap-6">
        <li><router-link to="/features" :class="isActive('/features') ? 'underline' : ''">功能</router-link></li>
        <li><router-link to="/pricing"  :class="isActive('/pricing')  ? 'underline' : ''">定價</router-link></li>
        <li><router-link to="/blog"     :class="isActive('/blog')     ? 'underline' : ''">部落格</router-link></li>
        <li><router-link to="/about"    :class="isActive('/about')    ? 'underline' : ''">關於</router-link></li>
      </ul>

      <div class="flex items-center gap-2">
        <button class="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10" @click="toggleDark" aria-label="切換深色模式">🌙</button>
        <!-- 主要 CTA：導到定價購買錨點 -->
        <router-link to="/pricing#buy" class="btn-primary hidden sm:inline-flex" id="header-cta" data-analytics="cta_header_free_start">
          免費開始
        </router-link>
        <button class="md:hidden px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10" @click="toggleMenu" aria-expanded="open" aria-controls="mobile-menu">☰</button>
      </div>
    </nav>

    <!-- 行動版選單 -->
    <div v-show="open" id="mobile-menu" class="md:hidden border-t dark:border-white/10">
      <div class="container-p py-4 flex flex-col gap-3">
        <router-link to="/features" @click="open=false">功能</router-link>
        <router-link to="/pricing"  @click="open=false">定價</router-link>
        <router-link to="/blog"     @click="open=false">部落格</router-link>
        <router-link to="/about"    @click="open=false">關於</router-link>
        <router-link to="/pricing#buy" class="btn-primary text-center" @click="open=false" id="mobile-cta" data-analytics="cta_mobile_free_start">
          免費開始
        </router-link>
      </div>
    </div>
  </header>
</template>
