import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/index.css";
import App from "./App.vue";

// 頁面
import Home from "./pages/Home.vue";
import Features from "./pages/Features.vue";
import Pricing from "./pages/Pricing.vue";
import Blog from "./pages/Blog.vue";
import BlogPost from "./pages/BlogPost.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Privacy from "./pages/Privacy.vue";
import Terms from "./pages/Terms.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/features", component: Features },
  { path: "/pricing", component: Pricing },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogPost },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/privacy", component: Privacy },
  { path: "/terms", component: Terms },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).mount("#app");
