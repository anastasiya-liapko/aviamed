<template>
    <div id="map"></div>
</template>

<script>
    export default {
        props: ['coordinates', 'icon'],
        mounted: function() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: this.coordinates,
                zoom: 16
            });

            var image = {
                url: this.icon,
                anchor: new google.maps.Point(25, 40),
                scaledSize: new google.maps.Size(50, 50)
            };

            var marker = new google.maps.Marker({
                position: this.coordinates,
                map: map,
                icon: image
            });
        }
    }
</script>

<style lang="sass">
    #map
        width: 700px
        height: 400px
        margin: 0 auto
        border: 1px solid red

    @media(max-width: 991px)
        #map
            width: 100%
</style>