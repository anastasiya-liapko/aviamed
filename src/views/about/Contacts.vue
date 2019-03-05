<template>
    <div class="contacts">
        <div class="container">
            <app-map :coordinates="map.coordinates" :icon="map.icon"></app-map>
        </div>
    </div>
</template>

<script>
    import Map from '@/components/Map.vue'
    
    export default {
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
    .contacts
        height: 100%
        .container
            height: 100%
            background-color: green
</style>