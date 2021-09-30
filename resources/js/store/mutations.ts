import type { AppState } from './state'
export default {
    TOGGLE_DARK_MODE: (state: AppState) => (state.darkMode = !state.darkMode),
}
