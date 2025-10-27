<template>
  <section class="container-p py-12 max-w-3xl">
    <h1 class="text-3xl font-bold">聯絡我們</h1>
    <p class="mt-2 text-neutral-600 dark:text-neutral-300">
      有任何合作、授權、發票或客製需求，歡迎填表，我們會在 1–2 個工作日回覆。
    </p>

    <!-- Formspree：將 YOUR_ID 換成你的表單 ID -->
    <form action="https://formspree.io/f/YOUR_ID" method="POST" class="mt-6 space-y-4">
      <div>
        <label class="block text-sm mb-1">姓名</label>
        <input type="text" name="name" required class="w-full" placeholder="您的姓名">
      </div>
      <div>
        <label class="block text-sm mb-1">Email</label>
        <input type="email" name="email" required class="w-full" placeholder="您常用的 Email">
      </div>
      <div>
        <label class="block text-sm mb-1">訊息</label>
        <textarea name="message" rows="5" class="w-full" placeholder="請描述您的需求"></textarea>
      </div>
      <button class="btn-primary">送出</button>
    </form>

    <!-- 若部署在 Netlify，改用下方版本（並移除上方 form）：
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="mt-6 space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <div><label class="block text-sm mb-1">姓名</label><input type="text" name="name" required class="w-full"></div>
      <div><label class="block text-sm mb-1">Email</label><input type="email" name="email" required class="w-full"></div>
      <div><label class="block text-sm mb-1">訊息</label><textarea name="message" rows="5" class="w-full"></textarea></div>
      <button class="btn-primary">送出</button>
    </form>
    -->
  </section>
</template>
