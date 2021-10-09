import type { Commit } from 'vuex'
import type { AppState } from './state'
export type ActionDefaultArg = {
    commit: Commit
    state: AppState
}
export default {
    toggleDarkMode({ commit, state }: ActionDefaultArg, value: any) {
        const darkMode = state.darkMode
        if (typeof value === 'boolean' && value === darkMode) return
        localStorage.setItem('DARK_MODE', (!darkMode).toString())
        commit('TOGGLE_DARK_MODE')
    },
    toggleAppButton({ commit, state }: ActionDefaultArg, value: any) {
        const appButton = state.appButton
        if (typeof value === 'boolean' && value === appButton) return
        commit('TOGGLE_APP_BUTTON')
    },
}
