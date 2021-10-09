<template>
    <div
        ref="appButtonRef"
        class="app-button"
        :class="{
            active: appButton,
        }"
    >
        <a class="app-button__item nav-count-1">
            <i class="ic-user"></i>
            <span class="invisible">Profile</span>
        </a>
        <router-link to="/mp3" class="app-button__item nav-count-2">
            <i class="ic-mn-home"></i>
            <span class="invisible">Compose</span>
        </router-link>
        <router-link to="/" class="app-button__item nav-count-3">
            <i class="ic-tools"></i>
            <span class="invisible">Chats</span>
        </router-link>
        <a class="app-button__item nav-count-4">
            <i class="ic-noti"></i>
            <span class="invisible">Alarm</span>
        </a>
        <a @click="toggleAppButton" class="mask">
            <i class="ic-add"></i>
        </a>
    </div>
</template>
<script lang="ts">
import { onMounted, computed, defineComponent, ref, unref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex'
export default defineComponent({
    name: 'AppButton',
    setup() {
        const store = useStore()
        const appButtonRef = ref<HTMLDivElement>()
        const appButton = computed(() => store.state.appButton)
        onClickOutside(appButtonRef, () => {
            if (!unref(appButton)) return
            toggleAppButton()
        })
        const toggleAppButton = () => store.dispatch('toggleAppButton')
        return {
            toggleAppButton,
            appButton,
            appButtonRef,
        }
    },
})
</script>
<style lang="scss" scoped>
$font-size: 24px;

.app-button {
    right: 15px;
    z-index: 9999;
    width: 45px;
    bottom: 15px;
    height: 45px;
    display: block;
    position: fixed;
    line-height: 45px;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
    &:after {
        top: 0;
        left: 0;
        content: '';
        width: inherit;
        height: inherit;
        border-radius: 50%;
        position: absolute;
        background: #f23363;
        transition: all 0.1s ease-in-out 0s;
    }

    &.active {
        .mask {
            background: #cf0e3f;
            transform: rotate(-135deg);
        }
        &:after {
            top: -125px;
            left: -125px;
            width: 350px;
            height: 350px;
        }
        .nav-count-1 {
            transform: translate(10px, -100px);
        }
        .nav-count-2 {
            transform: translate(-35px, -80px);
        }
        .nav-count-3 {
            transform: translate(-80px, -45px);
        }
        .nav-count-4 {
            transform: translate(-100px, 0);
        }
    }
    .mask {
        z-index: 10000;
        color: #fff;
        width: inherit;
        height: inherit;
        cursor: pointer;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        background: #f23363;
        transition: all 0.1s ease-in-out 0s;
        i {
            font-size: $font-size;
            width: $font-size;
            height: $font-size;
        }
    }
    &__item {
        top: 0;
        left: 0;
        z-index: 19;
        width: 45px;
        height: 45px;
        color: #fff;
        font-size: 24px;
        transform: none;
        line-height: 45px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.68, 1.55, 0.265, 1);
        cursor: pointer;
    }
}
.pull-left {
    float: left;
}
.pull-right {
    float: right;
}
.html {
    display: none;
}
.invisible {
    display: none;
}
.html.visible {
    display: block;
}
.visible {
    display: block;
}
</style>
