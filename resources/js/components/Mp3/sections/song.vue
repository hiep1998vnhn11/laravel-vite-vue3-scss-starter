<script lang="ts">
import SongInline from '../song/Inline.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SongSection',
    components: { SongInline },
    props: {
        title: { type: String },
        songs: { type: Array, default: [] },
    },
    setup(props) {
        return props
    },
})
</script>
<template>
    <h3>{{ title }}</h3>
    <song-inline
        v-for="(song, index) in songs"
        :key="'song' + index"
        :song="song"
    />
</template>

<style lang="scss" scoped>
h3 {
    font-weight: bold;
    margin: 15px 0;
    font-size: 22px;
}
</style>
