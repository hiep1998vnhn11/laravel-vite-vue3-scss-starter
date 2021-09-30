import type { Commit } from 'vuex'
export type ActionDefaultArg = {
    commit: Commit
    state: any
}
export default {
    toggleDarkMode({ commit, state }: ActionDefaultArg, value: any) {
        const darkMode = state.darkMode
        if (typeof value === 'boolean' && value === darkMode) return
        localStorage.setItem('DARK_MODE', (!darkMode).toString())
        commit('TOGGLE_DARK_MODE')
    },
}
