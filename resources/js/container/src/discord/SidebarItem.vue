<template>
    <ul class="discord-sidebar-list">
        <li
            v-for="(item, index) in items"
            :key="'item' + index"
            :class="{ 'is-active': item.active }"
        >
            <a href="#">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
            </a>
        </li>
    </ul>
</template>
<script lang="ts">
import { NavBar } from './types'
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'DiscordSidebarItem',
    props: {
        items: {
            type: Array as PropType<Array<NavBar>>,
        },
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped>
$font-size: 24px;
.dark {
    .discord-sidebar-list {
        li {
            &.is-active {
                background-color: #d3d7dc;
            }
        }
    }
}
.discord-sidebar-list {
    list-style: none;
    padding: 8px;
    display: block;
    li {
        margin: 5px 0;
        border-left: 3px solid transparent;
        font-weight: 500;
        cursor: pointer;
        border-radius: 5px;
        &.is-active {
            background-color: #d3d7dc;
        }
        &.is-active,
        &:hover {
            opacity: 0.8;
            background-color: #d3d7dc;
        }
    }
    a {
        display: flex;
        align-items: center;
        color: var(--text-secondary);
        text-decoration: none;
        padding: 10px 25px;
        i {
            font-size: $font-size;
            width: $font-size;
            height: $font-size;
            margin-right: 10px;
        }
        span {
            white-space: nowrap;
            line-height: normal;
        }
    }
}
</style>
