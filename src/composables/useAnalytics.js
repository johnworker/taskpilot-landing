export function useAnalytics() {
  function trackEvent(name, params = {}) {
    // GA4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", name, params);
    }
    // Plausible
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(name, { props: params });
    }
    // 開發模式 fallback
    if (!(typeof window !== "undefined" && (window.gtag || window.plausible))) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, params);
    }
  }

  // 綁定所有含 data-analytics 的元素
  function bindClicks(root = document) {
    if (!root || !root.querySelectorAll) return;
    const selector = "[data-analytics]";
    root.querySelectorAll(selector).forEach((el) => {
      if (el.__tp_analytics_bound) return;
      el.addEventListener("click", () => {
        const evt = el.getAttribute("data-analytics");
        if (evt) {
          trackEvent(evt, {
            id: el.id || undefined,
            href: el.getAttribute("href") || el.getAttribute("to") || undefined,
            text: (el.textContent || "").trim() || undefined,
          });
        }
      });
      el.__tp_analytics_bound = true;
    });
  }

  return { trackEvent, bindClicks };
}

// 讓「import useAnalytics from ...」與「import { useAnalytics } from ...」都能用
export default useAnalytics;
