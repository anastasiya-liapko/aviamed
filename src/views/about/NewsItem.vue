<template>
    <div class="news-item">
        <div class="container">
            <router-link 
                :to="{name: 'news'}"
                tag="a">
                <- Все новости
            </router-link>
            <br>
            <p>{{ $route.params.id }}</p>
            <br>
            <app-modal-slider></app-modal-slider>
            <br>
            <!-- <app-photo-swipe></app-photo-swipe> -->
        </div>
    </div>
</template>

<script>
    import ModalSlider from '@/components/ModalSlider.vue'
    // import PhotoSwipe from '@/components/PhotoSwipe.vue'

    export default {
        components: {
            'app-modal-slider': ModalSlider
            // 'app-photo-swipe': PhotoSwipe
        }
    }
</script>

<style lang="sass">

</style>