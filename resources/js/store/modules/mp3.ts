import { getObject, saveObject } from '/@/helpers/mp3/storage'
const settings = getObject('settings') || {}
import Player from '/@/hooks/mp3/player'

const state = () => ({
    player: new Proxy(new Player(), {
        set(target: any, prop, val) {
            target[prop] = val
            return true
        },
    }),
    settings: new Proxy(settings, {
        set(target: any, prop, val) {
            target[prop] = val
            saveObject('settings', target)
            return true
        },
    }),
    queueItems: [],
    recentItems: [],
    isShowQueuePlaylist: false,
    isProgressBusy: false,
})

const mutations = {
    update(state: any, payload: [string, any]) {
        const [key, value] = payload
        state[key] = value
    },
}

export default {
    state,
    mutations,
    namespaced: true,
}
