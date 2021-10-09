<template>
    <aside class="discord-sidebar left">
        <div class="discord-sidebar__top">123</div>
        <div class="top">
            <router-link to="/">
                <div class="logo"></div>
            </router-link>
        </div>
        <nav class="nav nav-1">
            <sidebar-item :items="nav1Items" />
        </nav>
        <div class="devide"></div>
        <div class="middle">
            <nav class="nav nav-2">
                <sidebar-item :items="nav2Items" />
            </nav>
        </div>
        <div class="bottom">
            <div class="create-playlist">
                <a href="#">
                    <i class="ic-add"></i>
                    <span>Tạo playlist mới</span>
                </a>
            </div>

            <div class="expand">
                <button class="btn" @click="expandSidebar">
                    <i :class="isExpanded ? 'ic-go-left' : 'ic-go-right'"></i>
                </button>
            </div>
        </div>
    </aside>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import SidebarItem from './SidebarItem.vue'
export default defineComponent({
    name: 'DiscordSidebar',
    components: {
        SidebarItem,
    },
    setup() {
        onMounted(() => {})
        const nav1Items = [
            { title: 'Cá Nhân', icon: 'ic-library', slug: '/mymusic' },
            { title: 'Khám Phá', icon: 'ic-mn-home', slug: '/', active: true },
            {
                title: '#zingchart',
                icon: 'ic-mn-zingchart',
                slug: '/zing-chart',
            },
            { title: 'Theo Dõi', icon: 'ic-feed', slug: '' },
        ]
        const nav2Items = [
            { title: 'Nhạc Mới', icon: 'ic-mn-song', slug: '/mymusic' },
            { title: 'Thể Loại', icon: 'ic-mn-catalogue', slug: '/' },
            { title: 'Top 100', icon: 'ic-mn-top100', slug: '/zing-chart' },
            { title: 'MV', icon: 'ic-mn-mv', slug: '' },
        ]
        return {
            nav1Items,
            nav2Items,
            isExpanded: true,
        }
    },
})
</script>
<style lang="scss" scoped>
.dark {
    .discord-sidebar {
        background: #2f3136;
    }
}
.discord-sidebar {
    display: inline-block;
    width: 250px;
    transition: width 0.3s;
    height: 100vh;
    background: #f2f3f5;
    position: fixed;
    top: 0;
    left: 72px;
    &__top {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-bottom: solid 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    }
    .top {
        padding: 0 25px 0 28px;
        height: $top-height;
        width: 100%;
        align-items: center;
        display: flex;
        * {
            display: inline-block;
        }
        .logo {
            width: 120px;
            height: 40px;
            display: inline-block;
            background: var(--logo-url) 50% / contain no-repeat;
        }
    }
    .devide {
        position: relative;
        height: 1px;
        &::after {
            content: '';
            border-top: 1px solid var(--border-color);
            position: absolute;
            left: 25px;
            right: 25px;
            top: 0;
        }
    }
    .nav-1 {
        margin-bottom: 15px;
    }
}
.middle {
    margin-top: 14px;
}
.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .create-playlist {
        border-top: 1px solid var(--border-color);
        height: 54px;
        display: flex;
        align-items: center;
        cursor: pointer;
        @include media('<medium') {
            display: none;
        }
        a {
            display: flex;
            padding: 0 25px;
            color: var(--text-primary);
            font-weight: 700;
            align-items: center;
            text-decoration: none;
            &:hover {
                color: var(--primary);
            }
            i {
                font-size: 18px;
                height: 18px;
                margin-right: 10px;
            }
            span {
                flex: 1 1;
            }
        }
    }
    .expand {
        @include media('>medium') {
            display: none;
        }
        float: right;
        padding: 10px;
        .btn {
            background: var(--alpha-bg);
            border-radius: 999px;
            padding: 15px 18px;
        }
    }
}
</style>
