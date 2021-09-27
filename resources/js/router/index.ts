import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Index', component: () => import('/@/pages/index.vue') },
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})
export function setupRouter(app: App<Element>) {
    app.use(router)
}
