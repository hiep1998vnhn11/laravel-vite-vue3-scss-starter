<template>
    <nav class="discord-navbar">123</nav>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'DiscordNavbar',
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped>
.discord-navbar {
    user-select: none;
    height: 50px;
    position: fixed;
    left: calc(72px + 250px);
    right: 0;
    top: 0;
    display: flex;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
}
</style>
