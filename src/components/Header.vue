<template>
    <div class="header">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-stretch">

                <app-burger id="js-toggleMenu" style="border: 1px solid red"></app-burger>

                <router-link
                    class="header__logo"
                    to="/" 
                    tag="a"
                    style="border: 1px solid red">
                    <img src="" alt="logo">
                </router-link>
                
                <transition name="rotate-hor">
                    <ul 
                        id="js-headerMenu"
                        class="header__nav nav row flex-column flex-lg-row flex-nowrap justify-content-between align-items-start align-items-lg-center flex-grow-1 d-lg-flex" 
                        v-show="showNav">
                        <li 
                            class="nav__item" 
                            @mouseover=""
                            v-for="(navItem, i) in nav">
                            <router-link 
                                :to="'/' + navItem.name | link" 
                                tag="a"
                                active-class="active"
                                @click.native="setShowFalse">
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
                                            tag="a"
                                            active-class="active"
                                            @click.native="setShowFalse">
                                            {{ dropdownItem }}
                                        </router-link>
                                    </li>
                                </ul>
                            </transition>

                        </li>

                        <router-link 
                            :to="'/запись-на-прием'" 
                            tag="a"
                            active-class="active"
                            @click.native="setShowFalse">
                            Запись на прием
                        </router-link>
                    </ul>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import { hideMixin } from '../mixins'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import Burger from '@/components/Burger.vue'

    export default {
        data() {
            return {
                show: false
            }
        },
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
        methods: {
            ...mapActions({
                'hideMenu': 'hide',
                'switchShowNav': 'switchShowNav'
            }),
        //     createLink(element) {
        //         return element === 'О нас' ? '' : '/' + element.split(' ').join('-').toLowerCase();
                
        //     }
            switchShow() {
                this.switchShowNav();
            },
            setShowFalse() {
                this.hideMenu();
            },
            hide(e) {
                var headerMenu = document.querySelector('#js-headerMenu');
                var toggleMenu = document.querySelector('#js-toggleMenu');
                if (!headerMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
                    this.hideMenu();
                }
            }
        },
        components: {
            'app-burger': Burger
        },
        mixins: [hideMixin]
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

    .active
        background-color: red

    .nav__item
        position: relative
        text-align: left
        &:hover .dropdown
            z-index: 10
            max-height: 300px

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
            max-width: 200px
            text-align: left


    @media(max-width: 991px)
        .header
            .container
                padding-left: 0
                padding-right: 0

        .header__logo
            padding-right: 15px
        //     z-index: 10
        //     width: 100%
        //     height: 60px
                
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




