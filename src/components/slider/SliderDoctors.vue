<template>
    <div class="slider slider_doctors" style="border: 1px solid blue;">
        <swiper 
            class="swiper-container" 
            ref="awesomeSwiper" 
            :options="swiperOption"
            style="border: 1px solid red;">
            <swiper-slide 
                class="swiper-slide" 
                v-for="slide in slides" 
                :key="slide.id">
                <router-link 
                    :to="{name: 'doctor', params: { id: slide.id }}" 
                    tag="a">
                    <div 
                        class="swiper-slide__item" 
                        style="border: 1px solid green;">
                        {{ slide.id }}
                    </div>
                </router-link>
            </swiper-slide>
            
        </swiper>
        <div class="swiper-button-prev" :class="'swiper-button-prev_' + buttons" slot="button-prev"></div>
        <div class="swiper-button-next" :class="'swiper-button-next_' + buttons" slot="button-next"></div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 500,
                    spaceBetween: 15,
                    slidesPerView: 4,
                    autoplay: {
                        delay: 15000,
                    },
                    breakpoints: {
                        576: {
                            slidesPerView: 1
                        },
                        767: {
                            slidesPerView: 2
                        },
                        991: {
                            slidesPerView: 3
                        },
                        1199: {
                            slidesPerView: 4
                        }
                    },
                    navigation: {
                        nextEl: '.swiper-button-next_' + this.buttons,
                        prevEl: '.swiper-button-prev_' + this.buttons
                    }
                }
            }
        },
        props: ['slides', 'buttons'],
        computed: {
            swiper() {
                return this.$refs.awesomeSwiper.swiper
            }
        }
    }
</script>

<style lang="sass" scoped>
    .slider_doctors
        width: 100%
        height: 200px
        position: relative
        .swiper-button-prev
            z-index: 5
            left: 0px
        .swiper-button-next
            right: 0px

    .swiper-container
        width: 90%
        height: 200px
        .swiper-slide__item
            height: 100%


    @media(max-width: 767px)
        .swiper-container
            width: 80%


    @media(max-width: 575px)
        .swiper-container
            width: 70%

</style>




