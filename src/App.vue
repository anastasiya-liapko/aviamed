<template>
    <div id="app" class="app">
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
        font-family: 'Roboto', Arial, sans-serif;
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        font-size: 1rem
        line-height: 1rem
        font-weight: 400px
        color: #2c3e50

    .app__title
        margin-top: 100px
        text-align: center

    .footer
        margin-top: auto

    .container
        border: 1px solid black

    .row
        margin: 0

    ul
        padding-left: 0
        list-style: none

    input
        height: 40px
        padding-left: 20px
        padding-right: 20px
        &:focus
        outline: none
        &:focus::placeholder
            opacity: 0

    .btn:focus
        box-shadow: none !important

    .slide-fade-enter-active
        animation: slide-fade-in 200ms ease-out forwards

    .slide-fade-leave-active
        animation: slide-fade-out 200ms ease-out forwards

    @keyframes slide-fade-in
        from
            transform: translateY(-100px)
            opacity: 0
        to
            transform: translateY(0)
            opacity: 1

    @keyframes slide-fade-out
        from
            transform: translateY(0)
            opacity: 1
        to
            transform: translateY(-100px)
            opacity: 0

</style>
