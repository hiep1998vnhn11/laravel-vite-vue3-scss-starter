<template>
    <div class="theming">
        <h3>Chủ đề</h3>
        <div class="themes">
            <div
                class="theme"
                v-for="(theme, index) in themes"
                :key="'theme' + index"
            >
                <figure
                    @click="toggleDarkMode(theme.isDark)"
                    :class="{ active: theme.isDark === darkMode }"
                >
                    <img :src="theme.url" alt="image" />
                </figure>
                <div class="name">
                    {{ theme.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark } from '/@/hooks/app/useDark'
export default defineComponent({
    setup() {
        const { darkMode, toggleDarkMode } = useDark()
        const themes = [
            {
                name: 'Tối',
                code: 'dark',
                url: '/images/themes/dark.jpeg',
                isDark: true,
            },
            {
                name: 'Sáng',
                code: 'light',
                url: '/images/themes/light.jpeg',
                isDark: false,
            },
        ]
        return {
            themes,
            toggleDarkMode,
            darkMode,
        }
    },
})
</script>

<style lang="scss" scoped>
.theming {
    h3 {
        font-weight: bold;
        margin-bottom: 15px;
    }
    .themes {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: wrap;
        .theme {
            width: 21%;
            margin-right: 15px;
            margin-bottom: 15px;
            overflow: hidden;
            .name {
                margin-top: 5px;
            }
            figure {
                margin: 0;
                display: flex;
                border: 1px solid transparent;
                line-height: 0;
                border-radius: 5px;
                flex-shrink: 0;
                overflow: hidden;
                cursor: pointer;
                img {
                    border-radius: 5px;
                }
                &:hover,
                &.active {
                    border-color: #7200a1 !important;
                }
            }
        }
    }
}
</style>
