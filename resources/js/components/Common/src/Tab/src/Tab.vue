<template>
    <div
        class="tab"
        :class="{
            active: isActive,
        }"
        @click="onClick"
    >
        {{ tab.name }}
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, PropType, computed } from 'vue'
import { TabType } from './types'
export default defineComponent({
    name: 'Tab',
    emits: ['onClick'],
    props: {
        tab: {
            type: Object as PropType<TabType>,
            default: () => ({}),
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const tab = props.tab
        const isActive = computed(() => props.isActive)
        onMounted(() => {})
        const onClick = () => emit('onClick')
        return {
            onClick,
            tab,
            isActive,
        }
    },
})
</script>
<style lang="scss" scoped>
.tab {
    display: block;
    padding: 8px 12px;
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
    position: relative;
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-bottom: none;
    &.active {
        border-bottom: solid 3px #5767f2;
    }
    &:hover {
        opacity: 0.7;
        &::before {
            content: '';
            position: absolute;
            height: 3px;
            width: 50%;
            background: #5767f2;
            bottom: -3px;
            left: 25%;
        }
    }
}
</style>
