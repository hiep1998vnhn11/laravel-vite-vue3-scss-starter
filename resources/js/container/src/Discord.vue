<template>
    <div>
        <Navbar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import Navbar from './discord/Navbar.vue'
export default defineComponent({
    name: 'Discord',
    components: {
        Navbar,
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
