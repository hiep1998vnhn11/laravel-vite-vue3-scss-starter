import { Router } from 'vue-router'
export function createAuthGuard(router: Router) {
    router.beforeEach((to, from) => {
        if (to.meta.requireAuth) {
        }
    })
}
