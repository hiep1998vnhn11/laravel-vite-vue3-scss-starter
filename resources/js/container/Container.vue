<template>
    <div>
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
export default defineComponent({
    name: 'Container',
    setup() {
        const route = useRoute()
        const keyRoute = computed(() => route.fullPath)
        const transitionName = computed(
            () => route.meta.transitionName || 'fade'
        )
        return { keyRoute, transitionName }
    },
})
</script>
<style lang="scss" scoped></style>
