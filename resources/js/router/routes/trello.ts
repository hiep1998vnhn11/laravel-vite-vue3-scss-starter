import type { RouteRecordRaw } from 'vue-router'
import { TrelloContainer } from '/@/container'
export default [
    {
        path: '/trello',
        name: 'Trello',
        component: TrelloContainer,
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
