<script setup>
import { ref, onMounted } from "vue";
const open = ref(false);
onMounted(() => { open.value = !localStorage.getItem("tp_cookie_ok"); });
const accept = () => { localStorage.setItem("tp_cookie_ok","1"); open.value=false; };
</script>

<template>
  <div v-if="open" class="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 z-50">
    <div class="card p-5 max-w-xl">
      <p class="text-sm text-neutral-700">
        我們使用 Cookie 改善體驗。詳見 <a href="/privacy" class="underline">隱私權政策</a>。
      </p>
      <div class="mt-3 flex gap-3">
        <button class="btn-primary" @click="accept">我同意</button>
        <a href="/privacy" class="px-4 py-3 rounded-xl ring-1 ring-neutral-200">瞭解更多</a>
      </div>
    </div>
  </div>
</template>
