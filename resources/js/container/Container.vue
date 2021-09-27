<template>
    <div>
        container
        <router-view :key="keyRoute" />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
    name: "Container",
    setup() {
        const route = useRoute();
        const keyRoute = computed(() => route.fullPath);
        return { keyRoute };
    },
});
</script>
<style lang="scss" scoped></style>
