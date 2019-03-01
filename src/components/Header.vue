<template>
    <div class="header">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-center">

                <app-burger></app-burger>

                <div class="header__logo">
                    <router-link 
                        to="/" 
                        tag="a">
                        Logo
                    </router-link>
                </div>

                <transition name="slide">
                    <ul 
                        class="header__nav nav row flex-column flex-lg-row flex-nowrap justify-content-between align-items-start align-items-lg-center flex-grow-1 d-lg-flex" 
                        v-show="showNav">
                        <li 
                            class="nav__item" 
                            v-for="(navItem, i) in nav">
                            <router-link 
                                :to="'/' + navItem.name | link" 
                                tag="a">
                                {{ navItem.name }}
                            </router-link>

                            <transition>
                                <ul 
                                    class="dropdown row flex-nowrap flex-column justify-content-start" 
                                    v-if="navItem.children">
                                    <li 
                                        class="dropdown__item" 
                                        v-for="dropdownItem in navItem.children">
                                        <router-link 
                                            :to="'/' + dropdownItem | link" 
                                            tag="a">
                                            {{ dropdownItem }}
                                        </router-link>
                                    </li>
                                </ul>
                            </transition>

                        </li>

                        <router-link 
                            :to="'/запись-на-прием'" 
                            tag="a">
                            Запись на прием
                        </router-link>
                    </ul>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Burger from '@/components/Burger.vue';

    export default {
        computed: {
            ...mapGetters([
                'nav',
                'showNav'
            ])
        },
        filters: {
            link(element) {
                return element.split(' ').join('-').toLowerCase();
            }
        },
        // methods: {
        //     createLink(element) {
        //         return element === 'О нас' ? '' : '/' + element.split(' ').join('-').toLowerCase();
                
        //     }
        // },
        components: {
            'app-burger': Burger
        }
    }
</script>

<style lang="sass">
    .header
        z-index: 10
        position: relative
        width: 100%
        height: auto
        background-color: lightblue
        .container
            position: relative

    .header__logo
        width: 150px

    .nav__item
        position: relative
        text-align: left
        &:hover .dropdown
            z-index: 10
            max-height: 300px
        // &:last-child .dropdown
        //     left: auto
        //     right: 0

    .dropdown 
        position: absolute
        top: 100%
        left: 0
        max-height: 0
        height: auto
        background-color: lightblue
        transition: max-height 0.5s ease-in-out
        overflow: hidden
        border: 1px solid blue
        .dropdown__item
            text-align: left


    .slide-enter
    .slide-enter-active
        animation: slide-in 0.6s ease-in-out
    .slide-leave
    .slide-leave-active
        animation: slide-out 0.5s ease-in-out
    @keyframes slide-in
        from
            max-height: 0
        to
            max-height: 400px
    @keyframes slide-out
        from
            max-height: 400px
        to
            max-height: 0


    @media(max-width: 991px)
        .header
            .container
                padding-left: 0
                
        .nav
            position: absolute
            top: 100%
            left: 0
            width: 100%
            height: auto
            background-color: lightblue
            overflow: hidden
            border: 1px solid blue

        .dropdown 
            position: relative

</style>




