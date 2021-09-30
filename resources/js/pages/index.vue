<template>
    <div class="flex">
        <div class="container">
            <div>123</div>
            123
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
<style lang="scss" scoped></style>
