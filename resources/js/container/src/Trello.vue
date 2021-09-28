<template>
    <div>
        <TrelloNavbar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import TrelloNavbar from './trello/Navbar.vue'
export default defineComponent({
    name: 'Trello',
    components: {
        TrelloNavbar,
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
