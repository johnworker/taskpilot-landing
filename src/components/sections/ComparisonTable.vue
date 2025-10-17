<script setup>
const rows = [
  { feature: "完整頁面套組", starter: "✔️", pro: "✔️", team: "✔️" },
  { feature: "商業授權", starter: "單專案", pro: "多專案", team: "代理/客戶專案" },
  { feature: "技術支援", starter: "Email", pro: "優先", team: "SLA" },
  { feature: "延伸區塊包", starter: "—", pro: "✔️", team: "✔️" },
  { feature: "可轉售模板", starter: "❌", pro: "❌", team: "可洽談" },
];
</script>

<template>
  <section class="container-p py-12">
    <h2 class="text-2xl font-bold">方案比較</h2>
    <div class="mt-6 overflow-x-auto">
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
          <tr v-for="r in rows" :key="r.feature">
            <td class="p-3 font-medium">{{ r.feature }}</td>
            <td class="p-3">{{ r.starter }}</td>
            <td class="p-3">{{ r.pro }}</td>
            <td class="p-3">{{ r.team }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
