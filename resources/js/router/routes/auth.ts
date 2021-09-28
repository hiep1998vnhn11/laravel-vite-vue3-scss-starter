import type { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('/@/pages/Auth/login.vue'),
        meta: {
            requiredGuest: true,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('/@/pages/Auth/register.vue'),
        meta: {
            requiredGuest: true,
        },
    },
] as RouteRecordRaw[]
