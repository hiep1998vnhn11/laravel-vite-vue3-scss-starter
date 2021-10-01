import type { RouteRecordRaw } from 'vue-router'
import { Mp3Container } from '/@/container'
export default [
    {
        path: '/mp3',
        name: 'Mp3',
        component: Mp3Container,
        children: [
            {
                path: '',
                name: 'Mp3Index',
                component: () => import('/@/pages/mp3/index.vue'),
            },
            {
                path: 'album/:path/:id.html',
                name: 'Mp3Album',
                component: () => import('/@/pages/mp3/test.vue'),
            },
            {
                path: 'bai-hat/:path/:id.html',
                name: 'Mp3Baihat',
                component: () => import('/@/pages/mp3/bai-hat.vue'),
            },
            {
                path: 'test',
                name: 'TrelloTest',
                component: () => import('/@/pages/discord/index.vue'),
            },
        ],
    },
] as RouteRecordRaw[]
