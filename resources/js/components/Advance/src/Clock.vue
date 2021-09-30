<template>
    <div class="clock1"></div>
    <div class="clock">
        <div class="hour">
            <div
                class="hr"
                :style="{
                    transform: `rotateZ(${hh * 30 + mm / 2}deg)`,
                }"
            ></div>
        </div>
        <div class="min">
            <div
                class="mn"
                :style="{
                    transform: `rotateZ(${mm * 6}deg)`,
                }"
            ></div>
        </div>
        <div class="sec">
            <div
                class="sc"
                :style="{
                    transform: `rotateZ(${ss * 6}deg)`,
                }"
            ></div>
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, watch, onUnmounted } from 'vue'
export default defineComponent({
    name: 'Clock',
    setup() {
        const ss = ref<number>(new Date().getSeconds())
        const hh = ref<number>(0)
        const mm = ref<number>(0)
        const intervalRef = ref<any>()
        watch(
            () => ss.value,
            () => {
                hh.value = new Date().getHours()
                mm.value = new Date().getMinutes()
            },
            {
                immediate: true,
            }
        )
        onMounted(() => {
            intervalRef.value = setInterval(() => {
                console.log(123)
                ss.value = new Date().getSeconds()
            }, 1000)
        })
        onUnmounted(() => clearInterval(intervalRef.value))
        return {
            ss,
            mm,
            hh,
        }
    },
})
</script>
<style lang="scss" scoped>
.dark {
    .clock {
        background: #091921 url(/images/assets/clock.png);
        background-size: cover;
        border: 4px solid #091921;
        box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.05),
            20px 20px 20px rgba(0, 0, 0, 0.3),
            inset -8px -8px 15px rgba(255, 255, 255, 0.05),
            inset 20px 20px 20px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        &:before {
            background: #fff;
        }
        .mn:before {
            background: #fff;
        }
        .sc:before {
            background: #fff;
        }
    }
}
.clock {
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary-color url(/images/assets/clock.png);
    background-size: cover;
    border: 4px solid #efefef;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.5),
        10px 10px 10px rgba(0, 0, 0, 0.1),
        inset -8px -8px 15px rgba(255, 255, 255, 0.5),
        inset 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    &:before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #008eff;
        z-index: 10000;
    }
    .hour,
    .min,
    .sec {
        position: absolute;
    }
    .hour,
    .hr {
        width: 160px;
        height: 160px;
    }
    .min,
    .mn {
        width: 190px;
        height: 190px;
    }
    .sec,
    .sc {
        width: 230px;
        height: 230px;
    }
    .hr,
    .mn,
    .sc {
        display: flex;
        justify-content: center;
        // align-items: center;
        position: absolute;
        border-radius: 50%;
    }
    .hr {
        // transform: rotateZ(10deg);
        &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 80px;
            background: #ff105e;
            z-index: 10;
            border-radius: 6px 6px 0 0;
        }
    }
    .mn {
        &:before {
            content: '';
            position: absolute;
            width: 4px;
            height: 90px;
            background: #000;
            z-index: 11;
            border-radius: 6px 6px 0 0;
        }
    }
    .sc {
        &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: 150px;
            background: #008eff;
            z-index: 12;
            border-radius: 6px 6px 0 0;
        }
    }
}
</style>
