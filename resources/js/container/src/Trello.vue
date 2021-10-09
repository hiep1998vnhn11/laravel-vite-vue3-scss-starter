<template>
    <div class="trello">
        <perfect-scrollbar ref="trelloScrollbar">
            <TrelloNavbar />
            <router-view></router-view>
        </perfect-scrollbar>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent, ref } from 'vue'
import { useFavicon } from '@vueuse/core'
import TrelloNavbar from './trello/Navbar.vue'
import TrelloSidebarLeft from './trello/SidebarLeft.vue'
export default defineComponent({
    name: 'Trello',
    components: {
        TrelloNavbar,
        TrelloSidebarLeft,
    },
    setup() {
        const favicon = useFavicon()
        const trelloScrollbar = ref<any>()
        onMounted(() => {
            favicon.value = '/images/trello/favicon.ico'
        })
        return {
            trelloScrollbar,
        }
    },
})
</script>
<style lang="scss" scoped>
.trello {
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 50px 0 0 0;
    .ps {
        height: 100%;
        width: 100%;
    }
}
</style>
