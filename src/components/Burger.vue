<template>
    <div class="hamburger-wrapper">
  
        <button class="hamburger hamburger--spin btn" :class="{'is-active': showNav}" type="button" @click="switchShow">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
      
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'showNav'
            ])
        },
        methods: {
            ...mapActions([
                'switchShowNav'
            ]),
            switchShow() {
                this.switchShowNav();
            }
        }
    }
</script>

<style lang="sass">
    .hamburger-wrapper
        display: none


    @media(max-width: 991px)
        .hamburger-wrapper
            display: block

</style>