import type { RouteRecordRaw } from 'vue-router'
import { TrelloContainer } from '/@/container'
export default [
    {
        path: '/trello',
        name: 'Discord',
        component: TrelloContainer,
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
