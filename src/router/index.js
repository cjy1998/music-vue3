import { createWebHistory, createRouter } from "vue-router";


// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: () => import("../layout/components/topTab.vue"),name:'Home' },
  { path: '/about', component: () => import("../layout/components/footer.vue"),name:'About' },
]





const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});



export default router;