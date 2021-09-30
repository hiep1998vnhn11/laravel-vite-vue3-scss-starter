<template>
    <div class="login">
        <form ref="form" class="login__form">
            <div class="login__form__input">
                <input />
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { Textarea, Card } from '/@/components/Common'
export default defineComponent({
    name: 'Login',
    components: {
        Textarea,
        Card,
    },
    setup() {
        const text = ref('')
        onMounted(() => {})
        return {
            text,
        }
    },
})
</script>
<style lang="scss" scoped></style>
