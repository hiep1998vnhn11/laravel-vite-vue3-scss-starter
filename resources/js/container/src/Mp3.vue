<template>
    <div>
        discord
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
export default defineComponent({
    name: 'Mp3',
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
