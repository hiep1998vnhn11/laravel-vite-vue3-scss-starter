import { defHttp } from '/@/utils/axios'

export function fetchPlaylist(id: string) {
    return defHttp.get({
        url: '/playlist/getDetail?id=' + id,
    })
}

export function fetchStreaming(id: string) {
    return defHttp.get({
        url: '/song/getStreaming?id=' + id,
    })
}

export function fetchHome(page = 1) {
    return defHttp.get({
        url: '/home?page=' + page,
    })
}

export function fetchSong(id: string) {
    return defHttp.get({
        url: '/song/getDetail?id=' + id,
    })
}

export function fetchKaraokeLyric(id: string) {
    return defHttp.get({
        url: '/lyric?id=' + id,
    })
}

export function fetchLyric(link: string) {
    return defHttp.get({
        url: link,
    })
}
