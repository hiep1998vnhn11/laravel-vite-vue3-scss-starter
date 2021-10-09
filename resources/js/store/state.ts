export type AppState = {
    darkMode: boolean
    appButton: boolean
}
export default {
    darkMode: localStorage.getItem('DARK_MODE') === 'true',
    appButton: false,
} as AppState
