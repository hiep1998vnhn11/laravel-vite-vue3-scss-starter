<template>
    <div class="toggle" @click="toggleDarkMode">
        <i
            class="toggle__indicator"
            :class="{
                active: darkMode,
            }"
        ></i>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { useDark } from '/@/hooks/app/useDark'
export default defineComponent({
    name: 'Toggle',
    setup() {
        const { darkMode, toggleDarkMode } = useDark()
        onMounted(() => {})
        return {
            darkMode,
            toggleDarkMode,
        }
    },
})
</script>
<style lang="scss" scoped>
$toggle-size: 30px;
.dark {
    .toggle {
        background: #222;
        &__indicator {
            background: linear-gradient(to bottom, #222, #444);
        }
    }
}
.toggle {
    position: relative;
    display: block;
    width: $toggle-size * 2;
    height: $toggle-size;
    border-radius: $toggle-size;
    background: #eee;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
        inset 0 8px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 4px rgba(0, 0, 0, 0.1);

    &__indicator {
        position: absolute;
        top: 0;
        left: 0;
        width: $toggle-size;
        height: $toggle-size;
        background: linear-gradient(to bottom, #bbb, #ddd);
        border-radius: 50%;
        transform: scale(0.9);
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.05),
            inset 0 4px 4px rgba(255, 255, 255, 0.2),
            inset 0 -4px -4px rgba(255, 255, 255, 0.2);
        transition: 0.5s;
        &.active {
            left: $toggle-size;
        }
    }
}
</style>
