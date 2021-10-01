<template>
    <div class="default-layout">
        <Sidebar />
        <section class="content">
            <perfect-scrollbar>
                <Header />
                <div class="wrapper">
                    <router-view />
                </div>
            </perfect-scrollbar>
        </section>
        <QueuePlaylist />
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import Header from './mp3/Mp3Header.vue'
import Sidebar from './mp3/Sidebar.vue'
import QueuePlaylist from '/@/components/Mp3/QueuePlaylist.vue'
export default {
    components: {
        Header,
        Sidebar,
        QueuePlaylist,
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
$additional-width: $sidebar-width + $queue-playlist-width;
.default-layout {
    position: relative;
}
.content {
    margin-left: $sidebar-width;
    width: calc(100% - #{$additional-width});
    transition: width 0.3s;

    & > .ps {
        height: 100vh;
    }
    @include media('<large', '>medium') {
        width: calc(100% - #{$sidebar-width}) !important;
    }
    @include media('<medium') {
        margin-left: $sidebar-width-m !important;
        width: calc(100% - #{$sidebar-width-m}) !important;
    }

    min-width: 720px;
}
.wrapper {
    padding: 42px 45px 100px 58px;
    @include media('<large') {
        padding: 20px 38px 100px 38px !important;
    }
}
</style>
