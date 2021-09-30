import { useStore } from 'vuex'
import { computed } from 'vue'
export const useDark = () => {
    const store = useStore()
    const darkMode = computed(() => store.state.darkMode)
    const toggleDarkMode = (value: any) => {
        store.dispatch('toggleDarkMode', value)
    }
    return {
        darkMode,
        toggleDarkMode,
    }
}
