<template>
    <div class="service">
        <div class="container">
            <app-slider-doctors :slides="doctors"></app-slider-doctors>
        </div>
    </div>
</template>

<script>
    import SliderDoctors from '@/components/slider/SliderDoctors.vue'
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'doctors'
            ])
        },
        components: {
            'app-slider-doctors': SliderDoctors
        }
    }
</script>

<style lang="sass">

</style>
