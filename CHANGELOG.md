# Changelog
本檔案採用 Keep a Changelog 風格，版本編號遵循 Semantic Versioning（MAJOR.MINOR.PATCH）。

## [1.0.1] – 2025-10-27
### Added
- 新增 StickyCTA（滑動一定距離後顯示）與 GoTop（行動版 bottom-6、桌面版 bottom-20）。
- 事件追蹤：`cta_sticky_primary`、`cta_sticky_help`、`sticky_cta_closed`、`gotop_click`。
- README 新增 Vercel 部署段落與 Gumroad 上架注意事項。

### Changed
- Header／Footer／CTA 主要購買動線統一至 `/pricing#buy`，並於頁面內提供 `id="buy"` 錨點。
- Router 採用 `scrollBehavior` 實作平滑捲動；頁面懶載入與滑過預抓最佳化。

### Fixed
- 修正 `useAnalytics` 匯出方式導致 `bindClicks is not a function` 的相容性問題（同時支援 named / default export）。
- 深色模式下 `.prose` 內文白字精細化，不影響標題和 CTA 對比。

## [1.0.0] – 2025-10-24
### Added
- 首發版本（TaskPilot – Vue SaaS Landing Page Kit）。
- 完整頁面：Home / Features / Pricing / Blog / BlogPost / About / Contact / Privacy / Terms。
- 區塊：Hero / Trust / Metrics / Features / Testimonials / Pricing / FAQ(+JSON-LD) / Newsletter / CTA。
- SEO：Open Graph / Twitter Meta、`robots.txt`、`sitemap.xml`、FAQ 結構化資料。
- 可用性：深色模式、RWD、鍵盤焦點樣式、可存取性修飾。
- 效能：路由懶載入、滑過預抓、長快取標頭（建議在託管平台設定）。
- 分析：`data-analytics` 欄位與 `useAnalytics` 綁定（支援 GA4 / Plausible）。

## [Unreleased]
### Planned
- React 版本（與 Vue 組成 Pro 套組）。
- 更多區塊（Comparison 表格進階版、Feature Tabs 變體、整合第三方標誌牆）。
- Email 模板加購與 Bundles。
