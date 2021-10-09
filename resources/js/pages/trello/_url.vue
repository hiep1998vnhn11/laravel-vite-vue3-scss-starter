<template>
    <div>
        {{ url }}
        <Tabs :tabs="tabs" @changeTab="onChangeTab"></Tabs>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import { Tabs, TabType } from '/@/components/Common'
export default defineComponent({
    name: 'TrelloUrl',
    components: {
        Tabs,
    },
    setup() {
        const route = useRoute()
        const url = computed(() => route.params.url)
        const tabs: TabType[] = [
            {
                name: 'Tab1',
                key: '1',
            },
            {
                name: 'Tab1',
                key: '2',
            },
            {
                name: 'Tab1',
                key: '3',
            },
        ]
        onMounted(() => {
            console.log(unref(url))
        })
        const onChangeTab = (tab: string | number) => {
            console.log(tab)
        }
        return {
            url,
            tabs,
            onChangeTab,
        }
    },
})
</script>
<style lang="scss" scoped></style>
