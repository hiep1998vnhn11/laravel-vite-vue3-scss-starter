<template>
    <div class="textarea__style">
        <textarea
            ref="textarea"
            class="textarea"
            v-model="val"
            :style="styles"
        ></textarea>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed, watch, nextTick, onMounted } from 'vue'
export default defineComponent({
    name: 'TextInput',
    emits: ['send'],
    props: {
        value: {
            type: String,
            default: '',
        },
        autoResize: {
            type: Boolean,
            default: true,
        },
        minHeight: {
            type: Number,
            default: 44,
        },
        maxHeight: {
            type: Number,
            default: 300,
        },
        important: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { emit }) {
        const val = ref<string>('')
        const maxHeightScroll = ref<Boolean>(false)
        const height = ref<string>('auto')
        const textarea = ref<HTMLTextAreaElement>()
        const styles = computed(() => {
            if (!props.autoResize) return {}
            return {
                resize: props.important ? 'none' : 'none !important',
                height: height.value,
                overflow: maxHeightScroll.value
                    ? 'auto'
                    : props.important
                    ? 'hidden !important'
                    : 'hidden',
            }
        })
        onMounted(() => resize())

        watch(
            () => val.value,
            () => {
                resize()
            }
        )

        watch(
            () => props.minHeight,
            () => {
                nextTick(resize)
            }
        )

        watch(
            () => props.maxHeight,
            () => {
                nextTick(resize)
            }
        )

        watch(
            () => props.autoResize,
            () => {
                if (props.autoResize) resize()
            }
        )
        const resize = () => {
            const importantClass = props.important ? ' !important' : ''
            height.value = `auto${importantClass}`
            nextTick(() => {
                const scrollHeight = textarea.value
                    ? textarea.value.scrollHeight
                    : 0
                let contentHeight = scrollHeight + 1
                if (props.minHeight)
                    contentHeight =
                        contentHeight < props.minHeight
                            ? props.minHeight
                            : contentHeight
                if (props.maxHeight)
                    if (contentHeight > props.maxHeight) {
                        contentHeight = props.maxHeight
                        maxHeightScroll.value = true
                    } else maxHeightScroll.value = false

                const heightValue = contentHeight + 'px'
                height.value = `${heightValue}${importantClass}`
            })
        }
        return {
            val,
            maxHeightScroll,
            height,
            styles,
            textarea,
        }
    },
})
</script>
<style lang="scss" scoped>
.textarea__style {
    width: 100%;
    textarea {
        width: 100%;
        padding: 0.375rem 3.75rem;
        font-size: 18px;
        font-weight: 400;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
        }
    }
}
</style>
