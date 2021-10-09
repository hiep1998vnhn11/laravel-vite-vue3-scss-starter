<template>
    <div class="discord">
        <Toolbar />
        <Navbar />
        <Sidebar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import Toolbar from './discord/Toolbar.vue'
import Navbar from './discord/Navbar.vue'
import Sidebar from './discord/Sidebar.vue'
import { useFavicon } from '@vueuse/core'
export default defineComponent({
    name: 'Discord',
    components: {
        Toolbar,
        Navbar,
        Sidebar,
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
<style lang="scss" scoped>
.dark {
    .discord {
        background: #37393e;
    }
}

.discord {
    background: #ffffff;
    padding: 50px 0 0 322px;
    width: 100%;
    height: 100%;
}
</style>
