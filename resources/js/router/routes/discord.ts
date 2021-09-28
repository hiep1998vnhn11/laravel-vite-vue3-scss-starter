import type { RouteRecordRaw } from 'vue-router'
import { DiscordContainer } from '/@/container'
export default [
    {
        path: '/discord',
        name: 'Discord',
        component: DiscordContainer,
        children: [
            {
                path: '/',
                name: 'DiscordIndex',
                component: () => import('/@/pages/discord/index.vue'),
            },
            {
                path: '/test',
                name: 'DiscordTest',
                component: () => import('/@/pages/discord/index.vue'),
            },
        ],
    },
] as RouteRecordRaw[]
