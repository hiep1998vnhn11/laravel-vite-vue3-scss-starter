<template>
    <div class="auth">
        Auth
        <router-view />
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'AuthContainer',
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
