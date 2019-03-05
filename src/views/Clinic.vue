<template>
    <div class="clinic">
        <div class="container">
            <app-slider-gallery :slides="clinics" :buttons="'clinic'"></app-slider-gallery>
            <app-map :coordinates="map.coordinates" :icon="map.icon"></app-map>
        </div>
    </div>
</template>

<script>   
    import SliderGallery from '@/components/slider/SliderGallery.vue'
    import { mapGetters } from 'vuex'
    import Map from '../components/Map.vue'

    export default {
        data() {
            return {
                map: {
                    coordinates: {lat: 59.925646, lng: 30.295998},
                    icon: 'img/icons/mark.png'
                }
            }
        },
        computed: {
            ...mapGetters([
                'clinics'
            ])
        },
        components: {
            'app-slider-gallery': SliderGallery,
            'app-map': Map
        }
    }
</script>

<style lang="sass">

</style>