<template>
    <div>
        123
        <Navbar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import Navbar from './discord/Navbar.vue'
import { useFavicon } from '@vueuse/core'
export default defineComponent({
    name: 'Discord',
    components: {
        Navbar,
    },
    setup() {
        const favicon = useFavicon()

        onMounted(() => {
            favicon.value = '/images/discord/favicon.ico'
        })
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
