<template>
    <div class="discord-navbar">
        <ul class="discord-navbar__menu">
            <router-link
                to="/discord"
                custom
                v-slot="{ href, navigate, isActive }"
            >
                <li
                    class="discord-navbar__item"
                    :class="{
                        active: isActive,
                    }"
                >
                    <a
                        :href="href"
                        @click="navigate"
                        class="discord-svg-container"
                    >
                        <img src="/images/discord/discord.svg" />
                    </a>
                </li>
            </router-link>
            <li class="discord-navbar__item">123</li>
            <li class="discord-navbar__item">123</li>
            <li class="discord-navbar__item">123</li>
            <li class="discord-navbar__item">123</li>
        </ul>
    </div>
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
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 72px;
    align-items: center;
    overflow: hidden;
    padding-top: 10px;
    background: #e3e5e8;
    &__menu {
        height: 100%;
        width: 100%;
        overflow-y: scroll auto;
        padding: 0;
    }
    &__item {
        cursor: pointer;
        padding: 0 5px;
        border-left: solid 4px transparent;
        margin-bottom: 10px;
        margin-top: 10px;
        &.active,
        &:hover {
            border-left: solid 4px rgba(0, 0, 0, 0.5);
        }
    }
}

.discord-svg-container {
    background: #5766f2;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
