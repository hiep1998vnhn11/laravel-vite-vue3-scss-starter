<template>
    <div class="tabs">
        <Tab
            v-for="tab in tabs"
            :key="tab.key"
            @onClick="onChangeTab(tab.key)"
            :is-active="tabValue === tab.key"
            :tab="tab"
        ></Tab>
    </div>
</template>
<script lang="ts">
import {
    onMounted,
    ref,
    defineComponent,
    computed,
    PropType,
    watch,
    unref,
} from 'vue'
import { TabType } from './types'
import Tab from './Tab.vue'
export default defineComponent({
    name: 'Tabs',
    emits: ['changeTab'],
    props: {
        tabs: {
            type: Array as PropType<TabType[]>,
            default: [],
        },
    },
    components: {
        Tab,
    },
    setup(props, { emit }) {
        const tabValue = ref<string | number>('1')
        const tabs = computed<TabType[]>(() => props.tabs)
        watch(
            () => tabValue.value,
            () => emit('changeTab', unref(tabValue))
        )
        onMounted(() => {})
        const onChangeTab = (tabKey: number | string) => {
            tabValue.value = tabKey
        }
        return {
            tabs,
            onChangeTab,
            tabValue,
        }
    },
})
</script>
<style lang="scss" scoped>
.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
</style>
