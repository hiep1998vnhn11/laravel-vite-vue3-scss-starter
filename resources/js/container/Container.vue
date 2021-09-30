<template>
    <div
        :class="{
            dark: darkMode,
        }"
        class="app"
    >
        <router-view v-slot="{ Component }">
            <transition :name="transitionName">
                <component :is="Component" :key="keyRoute" />
            </transition>
        </router-view>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useDark } from '/@/hooks/app/useDark'
export default defineComponent({
    name: 'Container',
    setup() {
        const route = useRoute()
        const keyRoute = computed(() => route.fullPath)
        const { darkMode, toggleDarkMode } = useDark()
        const transitionName = computed(
            () => route.meta.transitionName || 'fade'
        )
        return { keyRoute, transitionName, darkMode, toggleDarkMode }
    },
})
</script>
<style lang="scss" scoped>
.app {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: #d1dae3;

    &.dark {
        background: #091921;
    }
}
</style>
