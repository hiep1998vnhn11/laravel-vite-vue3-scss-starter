<template>
    <div>
        <TrelloNavbar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useFavicon } from '@vueuse/core'
import TrelloNavbar from './trello/Navbar.vue'
export default defineComponent({
    name: 'Trello',
    components: {
        TrelloNavbar,
    },
    setup() {
        const favicon = useFavicon()

        onMounted(() => {
            favicon.value = '/images/trello/favicon.ico'
        })
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
