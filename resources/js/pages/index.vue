<template>
    <div class="flex">
        <div class="container">
            <div>123</div>
            123
            <div class="arrow-up"></div>
            <div class="arrow-down"></div>
            <div class="arrow-left"></div>
            <div class="arrow-right"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { ToggleDarkMode } from '/@/components/Advance'
export default defineComponent({
    name: 'Index',
    components: {
        ToggleDarkMode,
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped>
.arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
}

.arrow-down {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #f00;
}

.arrow-right {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 160px solid green;
}

.arrow-left {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid blue;
}
</style>
