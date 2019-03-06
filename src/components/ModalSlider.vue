<template>
    <div class="preview-img-list">
        <img 
            class="preview-img-item" 
            v-for="(item, index) in items"
            :src="item.src" 
            @click="$photoswipe.open(index, items)">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [{
                    src: '../../src/assets/img/pics/Chrysanthemum.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Desert.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Hydrangeas.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Jellyfish.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Koala.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Lighthouse.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Penguins.jpg',
                    w: 1024,
                    h: 768
                }, {
                    src: '../../src/assets/img/pics/Tulips.jpg',
                    w: 1024,
                    h: 768
                }]
            }
        }
    }
</script>

<style lang="sass" scoped>
    .preview-img-list
        display: flex
        flex-wrap: wrap
        align-items: center

    .preview-img-item
        margin: 5px
        max-width: 100px
        max-height: 100px
</style>

