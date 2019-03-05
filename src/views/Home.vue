<template>
    <div class="home">
        <div class="container">
            <app-slider-doctors :slides="doctors" :buttons="'doctors'"></app-slider-doctors>
            <app-slider-partners :slides="partners" :buttons="'partners'"></app-slider-partners>
            <app-map :coordinates="map.coordinates" :icon="map.icon"></app-map>
        </div>
    </div>
</template>

<script>
    import SliderDoctors from '@/components/slider/SliderDoctors.vue'
    import SliderPartners from '@/components/slider/SliderPartners.vue'
    import Map from '@/components/Map.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'home',
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
                'doctors',
                'partners'
            ])
        },
        components: {
            'app-slider-doctors': SliderDoctors,
            'app-slider-partners': SliderPartners,
            'app-map': Map
        }
    }
</script>

<style lang="sass">

</style>
