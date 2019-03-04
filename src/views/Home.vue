<template>
    <div class="home">
        <div class="container">
            <p>Hello world</p>

            <app-map :coordinates="map.coordinates" :icon="map.icon"></app-map>
        </div>
    </div>
</template>

<script>
    import Map from '../components/Map.vue'

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
        components: {
            'app-map': Map
        }
    }
</script>

<style lang="sass">
    .home
        .container
            height: 1200px
</style>
