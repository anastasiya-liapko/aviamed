<template>
    <div id="app">
        <app-header></app-header>

        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>

        <app-footer></app-footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

<style lang="sass">
    html,
    body
        height: 100%

    #app
        height: 100%
        display: flex
        flex-direction: column
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        // text-align: center
        color: #2c3e50

    .footer
        margin-top: auto

    ul
        padding-left: 0
        list-style: none

    .row
        margin: 0

    .container
        border: 1px solid black

    .slide-fade-enter-active
        animation: slide-fade-in 200ms ease-out forwards

    .slide-fade-leave-active
        animation: slide-fade-out 200ms ease-out forwards

    @keyframes slide-fade-in
        from
            transform: translateY(-30px)
            opacity: 0
        to
            transform: translateY(0)
            opacity: 1

    @keyframes slide-fade-out
        from
            transform: translateY(0)
            opacity: 1
        to
            transform: translateY(-30px)
            opacity: 0

</style>
