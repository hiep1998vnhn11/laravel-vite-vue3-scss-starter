<template>
    <div>
        <template v-for="(section, index) in sections" :key="'section' + index">
            <SliderComponent
                v-if="section.sectionType === 'banner'"
                :sliders="section.items"
            />
            <Carousel
                v-else-if="section.sectionType === 'playlist'"
                :title="section.title"
                :items="section.items"
            />
        </template>
        <SliderComponent :sliders="sliderData" />
        <Carousel :title="`Test`" :items="carouselData" />
    </div>
</template>

<script lang="ts">
import SliderComponent from '/@/components/Mp3/Slider/index.vue'
import Carousel from '/@/components/Mp3/Carousel/index.vue'
import { onMounted, ref } from 'vue'
import { fetchHome } from '/@/api/mp3'
import carouselData from '/@/components/Mp3/Carousel/data.json'
import sliderData from '/@/components/Mp3/Slider/data.json'
export default {
    components: { SliderComponent, Carousel },
    setup() {
        const sections = ref<any>([])
        async function loadHome(page = 1) {
            const res = await fetchHome(page)
            if (res && res.data && Array.isArray(res.data.items)) {
                sections.value.push(...res.data.items)
            }
        }

        onMounted(() => {
            loadHome(1).then(() => {
                loadHome(2)
            })
        })
        return {
            sections,
            carouselData,
            sliderData,
        }
    },
}
</script>

<style lang="scss" scoped></style>
