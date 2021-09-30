import type { RouteRecordRaw } from 'vue-router'
import { Mp3Container } from '/@/container'
export default [
    {
        path: '/mp3',
        name: 'Mp3',
        component: Mp3Container,
        children: [
            {
                path: '/',
                name: 'TrelloIndex',
                component: () => import('/@/pages/discord/index.vue'),
            },
            {
                path: '/test',
                name: 'TrelloTest',
                component: () => import('/@/pages/discord/index.vue'),
            },
        ],
    },
] as RouteRecordRaw[]
