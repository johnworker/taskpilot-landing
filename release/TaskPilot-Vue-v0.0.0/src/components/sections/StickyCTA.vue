<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { cta } from "../../config/sections";
import defaultUseAnalytics, { useAnalytics as namedUseAnalytics } from "../../composables/useAnalytics";
const useAnalytics = namedUseAnalytics || defaultUseAnalytics;
const { trackEvent } = useAnalytics();

const SHOW_AFTER = 800; // 捲動門檻
const STORAGE_KEY = "tp_stickycta_closed";

const visible = ref(false);
const closed = ref(false);

function onScroll() {
  if (closed.value) return;
  const y = window.scrollY || window.pageYOffset;
  visible.value = y > SHOW_AFTER;
}

function close() {
  closed.value = true;
  visible.value = false;
  try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
  trackEvent("sticky_cta_closed");
}

onMounted(() => {
  try { closed.value = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) {}
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <transition name="slide-up">
    <div
      v-if="visible && !closed"
      class="fixed inset-x-0 bottom-0 z-50"
      role="region"
      aria-label="快速開始"
      :style="{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-3">
        <div class="rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur">
          <div class="px-5 py-4 flex flex-col md:flex-row md:items-center gap-4">
            <div class="flex-1 min-w-0">
              <p class="text-base font-semibold"> {{ cta.title }} </p>
              <p class="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                {{ cta.desc }}
              </p>
            </div>

            <div class="flex items-center gap-3">
              <router-link
                to="/pricing#buy"
                class="btn-primary no-hover-scale"
                id="sticky-cta-primary"
                data-analytics="cta_sticky_primary"
              >
                立刻開始
              </router-link>

              <router-link
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-4 py-2 no-hover-scale"
                id="sticky-cta-secondary"
                data-analytics="cta_sticky_help"
              >
                需要協助
              </router-link>

              <button
                class="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10 no-hover-scale"
                @click="close"
                aria-label="關閉底部提示"
                title="關閉"
              >✕</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: transform .18s ease, opacity .18s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); opacity: 0; }
</style>
