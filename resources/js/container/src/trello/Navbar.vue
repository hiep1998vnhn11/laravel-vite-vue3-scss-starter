<template>
    <div class="trello-navbar">
        <div class="trello-navbar__left">
            <router-link to="/trello" class="trello-navbar__gohome">
                <div class="trello-navbar__icon"></div>
            </router-link>
            <Dropdown> 123 </Dropdown>
        </div>
        <div class="trello-navbar__right">
            <img src="/images/trello/trello.svg" />
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { Dropdown } from '/@/components/Common'
export default defineComponent({
    name: 'TrelloNavbar',
    components: {
        Dropdown,
    },
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped>
.trello-navbar {
    position: fixed;
    display: flex;
    height: 50px;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    background: #0569a7;

    &__gohome {
        margin: 0 10px 0 6px;
        height: 32px;
    }
    &__icon {
        width: 75px;
        height: 15px;
        padding: 8px 0;
        position: relative;
        margin: 0;
        opacity: 1;
        &:before {
            content: '';
            background-image: url(/images/trello/header-logo.gif);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            display: block;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
        }
        &:after {
            background-image: url(/images/trello/header-logo.gif);
            opacity: 0;
        }
    }
}
</style>
