export type AppState = {
    darkMode: boolean
}
export default {
    darkMode: localStorage.getItem('DARK_MODE') === 'true',
} as AppState
