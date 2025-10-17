<script setup>

const headline = "用 TaskPilot 3 分鐘上線高轉換 SaaS 著陸頁";
const sub = "開箱即用的 Vue + Tailwind 區塊組合，RWD 與深色模式都幫你準備好。";
const bullets = ["免後端表單", "Core Web Vitals 友善", "深色模式", "可擴充區塊庫"];
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 opacity-10 dark:opacity-20"
         aria-hidden="true"
         style="background: radial-gradient(600px 300px at 10% -10%, rgba(99,102,241,.6), transparent),
                         radial-gradient(600px 300px at 90% -10%, rgba(99,102,241,.3), transparent)"></div>

    <div class="container-p pt-20 pb-16">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl/tight sm:text-5xl font-bold">
            {{ headline }}
          </h1>
          <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            {{ sub }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" class="btn-primary">立即開始</a>
            <router-link to="/features"
              class="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3">
              看看功能
            </router-link>
          </div>

          <ul class="mt-6 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-300">
            <li v-for="b in bullets" :key="b" class="flex items-center gap-2">✔️ <span>{{ b }}</span></li>
          </ul>
        </div>

        <div class="relative">
          <img src="/src/assets/hero.png" alt="產品預覽"
               class="w-full rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>
