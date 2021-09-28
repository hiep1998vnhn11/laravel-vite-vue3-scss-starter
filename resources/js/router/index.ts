import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './routes/auth'
import discordRoute from './routes/discord'
import trelloRoute from './routes/trello'
const routes: RouteRecordRaw[] = [
    ...authRoutes,
    ...discordRoute,
    ...trelloRoute,
    { path: '/', name: 'Index', component: () => import('/@/pages/index.vue') },
    {
        path: '/test',
        name: 'Test',
        component: () => import('/@/pages/test.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('/@/pages/error/404.vue'),
    },
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
