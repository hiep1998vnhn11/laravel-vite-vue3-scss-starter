import type { Router } from 'vue-router'
import { createAuthGuard } from './auth'
export function createRouteGuard(router: Router) {
    createAuthGuard(router)

    router.beforeResolve((to, from) => {})

    router.beforeEach((to, from) => {})
}
