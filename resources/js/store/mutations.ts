import type { AppState } from './state'
export default {
    TOGGLE_DARK_MODE: (state: AppState) => (state.darkMode = !state.darkMode),
    TOGGLE_APP_BUTTON: (state: AppState) =>
        (state.appButton = !state.appButton),
}
