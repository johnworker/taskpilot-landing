<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import defaultUseAnalytics, { useAnalytics as namedUseAnalytics } from "../../composables/useAnalytics";
const useAnalytics = namedUseAnalytics || defaultUseAnalytics;
const { trackEvent } = useAnalytics();

const visible = ref(false);

function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  visible.value = y > 400;
}
function goTop() {
  try {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {
    window.scrollTo(0, 0);
  }
  trackEvent("gotop_click");
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <transition name="fade">
    <button
      v-if="visible"
      class="fixed bottom-6 md:bottom-20 right-6 z-50 rounded-full h-12 w-12 flex items-center justify-center
             bg-brand text-white shadow-lg ring-1 ring-black/5 no-hover-scale"
      @click="goTop"
      aria-label="回到頁面頂部"
      title="回到頂部"
      :style="{ marginBottom: 'env(safe-area-inset-bottom)' }"
    >
      ↑
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
