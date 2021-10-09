<template>
    <div>
        <input-text @send="onSend" />
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import InputText from '/@/components/TextInput'
export default defineComponent({
    name: 'DiscordIndex',
    components: {
        InputText,
    },
    setup() {
        onMounted(() => {})
        const onSend = (text: string) => {
            console.log(text)
        }
        return {
            onSend,
        }
    },
})
</script>
<style lang="scss" scoped></style>
