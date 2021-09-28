<template>
    <div class="discord-navbar">
        <div class="discord-navbar__header"></div>
        <div class="discord-navbar__logo">
            <img src="/images/discord/discord.svg" />
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import discordFavicon from '/@/assets/images/discord/favicon.svg'
export default defineComponent({
    name: 'DiscordNavbar',
    setup() {
        onMounted(() => {})
        return {
            discordFavicon,
        }
    },
})
</script>
<style lang="scss" scoped>
.discord-navbar {
    display: flex;
    flex-direction: column;
}
</style>
