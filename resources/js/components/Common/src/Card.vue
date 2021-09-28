<template>
    <div ref="card" class="card">
        <div class="card-image">
            <div class="block pulsate"></div>
            <svg
                class="fpo"
                width="84px"
                height="63px"
                x="50%"
                y="50%"
                viewBox="0 0 84 63"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch -->
                <title>Shape</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(-964.000000, -1012.000000)"
                    fill-opacity="0.06"
                >
                    <g
                        id="16---Workpaper-Loading-Copy"
                        transform="translate(836.000000, 909.000000)"
                        fill="#000000"
                    >
                        <g
                            id="Icons-/-Special-/-RTE-/-Image"
                            transform="translate(100.000000, 67.000000)"
                        >
                            <g id="Icons-/-RTE-/-ImageSpecial">
                                <path
                                    d="M108.368088,36.5625 L30.8485565,36.5625 C29.319526,36.5625 28.0800018,
                                    37.8216991 28.0800018,39.375 L28.0800018,95.625 C28.0800018,97.1783009 29.319526,
                                    98.4375 30.8485565,98.4375 L108.368088,98.4375 C109.897118,98.4375 111.136642,
                                    97.1783009 111.136642,95.625 L111.136642,39.375 C111.136642,37.8216991 109.897118,
                                    36.5625 108.368088,36.5625 L108.368088,36.5625 Z M105.599533,42.1875 L105.599533,
                                    81.225 L96.7678436,68.68125 C96.2965986,68.0076728 95.5575991,67.5787153 94.747102,
                                    67.5082962 C93.936605,67.4378771 93.1366348,67.7331229 92.5596405,68.315625 L82.0668182,
                                    79.003125 L59.1154999,55.6875 C58.0356599,54.5970274 56.2916778,54.5970274 55.2118378,
                                    55.6875 L33.6171112,77.596875 L33.6171112,42.1875 L105.599533,42.1875 L105.599533,42.1875 Z M33.6171112,
                                    92.8125 L33.6171112,85.528125 L57.149826,61.621875 L80.1011444,84.9375 C81.1809844,86.0279726 82.9249665,
                                    86.0279726 84.0048065,84.9375 L94.1654022,74.64375 L105.599533,90.9 L105.599533,92.8125 L33.6171112,
                                    92.8125 L33.6171112,92.8125 Z M77.9139862,56.25 C77.9139862,53.1433983 80.3930345,50.625 83.4510956,
                                    50.625 C86.5091566,50.625 88.988205,53.1433983 88.988205,56.25 C88.988205,59.3566017 86.5091566,
                                    61.875 83.4510956,61.875 C80.3930345,61.875 77.9139862,59.3566017 77.9139862,56.25 L77.9139862,56.25 Z"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div class="card-content">
            <div class="block2 pulsate"></div>
            <div class="block3 pulsate"></div>
            <div class="circle pulsate"></div>
            <div style="clear: both"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'Card',
    setup() {
        onMounted(() => {})
        return {}
    },
})
</script>
<style lang="scss" scoped>
.card {
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    position: relative;
    margin: auto;
    top: 25%;
    .fpo {
        position: relative;
        margin: 25% auto;
        display: block;
    }
    .pulsate {
        background: linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0);
        background-size: 400% 400%;
        -webkit-animation: Gradient 2.25s ease infinite;
        -moz-animation: Gradient 2.25s ease infinite;
        animation: Gradient 2.25s ease infinite;
    }
    .block {
        display: block;
        width: 271px;
        height: 16px;
        color: black;
    }
    .block2 {
        width: 78px;
        height: 8px;
        margin-bottom: 8px;
    }
    .block3 {
        width: 131px;
        height: 8px;
        margin-bottom: 16px;
    }
    .circle {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        float: right;
    }
    .card-image {
        box-sizing: border-box;
        display: block;
        width: 335px;
        height: 243px;
        background: #fafafa;
        padding: 16px;
    }
    .card-content {
        clear: both;
        box-sizing: border-box;
        padding: 16px;
        background: #fff;
    }
    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
}
</style>
