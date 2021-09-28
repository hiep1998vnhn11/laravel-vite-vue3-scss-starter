<template>
    <loading />
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import Loading from '/@/components/Loading.vue'
export default defineComponent({
    name: 'Test',
    components: {
        Loading,
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
