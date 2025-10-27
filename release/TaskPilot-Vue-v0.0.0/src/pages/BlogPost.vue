<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const title = (route.params.slug || '').toString().replace(/-/g,' ');
</script>

<template>
  <article class="container-p prose lg:prose-lg dark:prose-invert py-12">
    <h1 class="capitalize">{{ title }}</h1>
    <p class="lead">這是文章示範內文。建議實際使用時，以 Markdown 或 Headless CMS 生成內容。</p>

    <h2>章節標題</h2>
    <p>說明你的方法、指標與前後對比，加入圖片與程式碼片段。</p>

    <pre><code class="language-js">console.log("Hello TaskPilot")</code></pre>

    <h2>延伸閱讀</h2>
    <ul>
      <li><router-link to="/features">功能總覽</router-link></li>
      <li><router-link to="/pricing">定價方案</router-link></li>
    </ul>
  </article>
</template>
