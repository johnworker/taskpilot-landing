// --- Trust Badges（放在 public/brands，使用絕對路徑） ---
export const trust = [
  { src: "/brands/logo-1.svg", alt: "Brand A" },
  { src: "/brands/logo-2.svg", alt: "Brand B" },
  { src: "/brands/logo-3.svg", alt: "Brand C" },
  { src: "/brands/logo-4.svg", alt: "Brand D" },
  { src: "/brands/logo-5.svg", alt: "Brand E" },
  { src: "/brands/logo-6.svg", alt: "Brand F" },
];

// --- 以下維持你原本的設定（可自行調整文案） ---
export const features = [
  { icon:"⚡", title:"快速上線", desc:"Vite + Tailwind 結構，3 分鐘跑起來。", href:"/features" },
  { icon:"📱", title:"RWD 穩定", desc:"行動優先設計，所有斷點皆妥當。", href:"/features" },
  { icon:"🌙", title:"深色模式", desc:"白字深底預設，對比舒適、閱讀清楚。", href:"/features" },
  { icon:"🧩", title:"模組化區塊", desc:"Hero/Features/Pricing/FAQ/CTA 即插即用。", href:"/features" },
  { icon:"📈", title:"轉換導向", desc:"清楚 CTA 與價錢表、FAQ 化解反對點。", href:"/features" },
  { icon:"🔌", title:"免後端表單", desc:"Formspree/Netlify Forms 部署即用。", href:"/features" },
];

export const pricing = {
  tiers: [
    {
      name:"Starter", monthly:9, yearly:79, tagline:"個人/單專案",
      features:["完整頁面","RWD & 深色模式","Email 支援"], cta:"#", popular:false
    },
    {
      name:"Pro", monthly:29, yearly:249, tagline:"團隊/多專案",
      features:["全部 Starter","優先支援","延伸區塊包"], cta:"#", popular:true
    },
    {
      name:"Team", monthly:59, yearly:499, tagline:"代理與客戶專案",
      features:["全部 Pro","SLA 支援","代理授權"], cta:"#", popular:false
    },
  ]
};

export const faqs = [
  { q:"需要後端嗎？", a:"不需要。表單可用 Formspree 或 Netlify Forms，純前端部署即可。" },
  { q:"支援深色模式嗎？", a:"有，預設白字深底，卡片背景也做了對比最佳化。" },
  { q:"可以用在商業專案嗎？", a:"可以，依你的授權方案（單專案/多專案/代理）選擇。" },
  { q:"怎麼部署？", a:"產出 dist 後丟到 Vercel 或 Netlify 即可；README 有步驟。" },
  { q:"會持續更新嗎？", a:"會，我們會增加更多版型與最佳化。" },
];

export const cta = {
  title: "準備好提升轉換了嗎？",
  desc: "3 分鐘上線你的 SaaS 著陸頁，專注產品價值，把模板交給我們。",
  primaryHref: "/pricing#buy",
  secondaryTo: "/contact",
};

export const metrics = [
  { value: "32%", label: "投放轉換提升" },
  { value: "3x", label: "頁面建置速度" },
  { value: "98", label: "Lighthouse/Perf" },
];

export const testimonials = [
  { quote:"半天就完成新產品頁，投放成效提升 32%。", author:"【Amber / 行銷主管】" },
  { quote:"RWD 很穩、樣式一致，可直接複製多品牌。", author:"【Ethan / 前端工程師】" },
  { quote:"表單、法務、追蹤一次到位，上線超快。", author:"【Mia / 創業者】" },
];
