<template>
    <div id="app" class="app">
        <app-header></app-header>

        <transition name="slide-top" mode="out-in">
            <router-view class="page"></router-view>
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
        min-height: 100%
        display: flex
        flex-direction: column
        font-family: 'Roboto', Arial, sans-serif;
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        font-size: 1rem
        line-height: 1rem
        font-weight: 400px
        color: #2c3e50

    .page
        flex-grow: 1

    .page__title
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

    button
        &:active
            outline: none !important
            box-shadow: none !important
        &:focus
            outline: none !important
            box-shadow: none !important

    img
        width: 100%
        height: auto

    .table
        margin-bottom: 0

    .btn:focus
        box-shadow: none !important

    [v-cloak] 
        display: none

    .flip-enter-active
        animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .flip-leave-active
        animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @keyframes flip-in-ver-left
        0% 
            transform: rotateY(80deg)
            opacity: 0
        100% 
            transform: rotateY(0)
            opacity: 1

    @keyframes flip-out-ver-left
        0% 
            transform: rotateY(0)
            opacity: 1
        100% 
            transform: rotateY(-70deg)
            opacity: 0

    .swing-enter-active
        animation: swing-in-top-fwd 1.05s cubic-bezier(0.175, 0.885, 0.320, 1.275) both

    .swing-leave-active
        animation: swing-out-top-bck 1s cubic-bezier(0.600, -0.280, 0.735, 0.045) both

    @keyframes swing-in-top-fwd 
        0% 
            transform: rotateX(-100deg)
            transform-origin: top
            opacity: 0
        100% 
            transform: rotateX(0deg)
            transform-origin: top
            opacity: 1
          
    @keyframes swing-out-top-bck 
        0% 
            transform: rotateX(0deg)
            transform-origin: top
            opacity: 1
        100% 
            transform: rotateX(-100deg)
            transform-origin: top
            opacity: 0

    .slide-elliptic-enter-active
        animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-elliptic-leave-active
        animation: slide-out-elliptic-top-bck 0.7s ease-in both

    @keyframes slide-in-elliptic-top-fwd 
        0% 
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform-origin: 50% 100%
            opacity: 0
        100% 
            transform: translateY(0) rotateX(0) scale(1)
            transform-origin: 50% 1400px
            opacity: 1

    @keyframes slide-out-elliptic-top-bck
        0% 
            transform: translateY(0) rotateX(0) scale(1)
            transform-origin: 50% 1400px
            opacity: 1
        100% 
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform-origin: 50% 100%
            opacity: 1

    .slide-left-enter-active
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-left-leave-active
        animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @keyframes slide-in-right 
        0% 
            transform: translateX(1000px)
            opacity: 0
        100% 
            transform: translateX(0)
            opacity: 1

    @keyframes slide-out-left 
        0% 
            transform: translateX(0)
            opacity: 1
        100% 
            transform: translateX(-1000px)
            opacity: 0

    .slide-top-enter-active
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-top-leave-active
        animation: slide-out-top 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
  
    @keyframes slide-in-top 
        0% 
            transform: translateY(-1000px)
            opacity: 0
        100% 
            transform: translateY(0)
            opacity: 1
  
    @keyframes slide-out-top 
        0% 
            transform: translateY(0)
            opacity: 1
        100% 
            transform: translateY(-1000px)
            opacity: 0

    .roll-enter
    .roll-enter-active
        animation: roll-in-left 0.6s ease-out both
        
    .roll-leave
    .roll-leave-active
        animation: roll-out-left 0.6s ease-in both

    @keyframes roll-in-left 
        0%
            transform: translateX(-800px) rotate(-540deg)
            opacity: 0
        100% 
            transform: translateX(0) rotate(0deg)
            opacity: 1

    @keyframes roll-out-left 
        0% 
            transform: translateX(0) rotate(0deg)
            opacity: 1
        100% 
            transform: translateX(-1000px) rotate(-540deg)
            opacity: 0

    .scale-top-enter
    .scale-top-enter-active
        animation: scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        
    .scale-top-leave
    .scale-top-leave-active
        animation: scale-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
  
    @keyframes scale-in-top 
        0% 
            transform: scale(0)
            transform-origin: 50% 0%
            opacity: 1
        100% 
            transform: scale(1)
            transform-origin: 50% 0%
            opacity: 1

    @keyframes scale-out-top 
        0% 
            transform: scale(1)
            transform-origin: 50% 0%
            opacity: 1
        100% 
            transform: scale(0)
            transform-origin: 50% 0%
            opacity: 1

    .bounce-left-enter
    .bounce-left-enter-active
        animation: bounce-in-left 1.1s both
        
    .bounce-left-leave
    .bounce-left-leave-active
        animation: bounce-out-left 1.5s both
  
    @keyframes bounce-in-left 
        0%
            transform: translateX(-600px)
            animation-timing-function: ease-in
            opacity: 0
        38%
            transform: translateX(0)
            animation-timing-function: ease-out
            opacity: 1
        55% 
            transform: translateX(-68px)
            animation-timing-function: ease-in
        72%
            transform: translateX(0)
            animation-timing-function: ease-out
        81% 
            transform: translateX(-28px)
            animation-timing-function: ease-in
        90% 
            transform: translateX(0)
            animation-timing-function: ease-out
        95% 
            transform: translateX(-8px)
            animation-timing-function: ease-in
        100% 
            transform: translateX(0)
            animation-timing-function: ease-out

    @keyframes bounce-out-left 
        0% 
            transform: translateX(0)
            animation-timing-function: ease-out
        5% 
            transform: translateX(-30px)
            animation-timing-function: ease-in
        15%
            transform: translateX(0)
            animation-timing-function: ease-out
        25% 
            transform: translateX(-38px)
            animation-timing-function: ease-in
        38% 
            transform: translateX(0)
            animation-timing-function: ease-out
        52%
            transform: translateX(-80px)
            animation-timing-function: ease-in
        70%
            transform: translateX(0)
            animation-timing-function: ease-out
        85%
            opacity: 1
        100% 
            transform: translateX(-1000px)
            opacity: 0

    .rotate-hor-enter
    .rotate-hor-enter-active
        animation: rotate-in-hor 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-hor-leave
    .rotate-hor-leave-active
        animation: rotate-out-hor 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @keyframes rotate-in-hor 
        0% 
            transform: rotateX(360deg)
            opacity: 0
        100% 
            transform: rotateX(0deg)
            opacity: 1
  
    @keyframes rotate-out-hor 
        0%
            transform: rotateX(360deg)
            opacity: 1
        100% 
            transform: rotateX(0deg)
            opacity: 0

    .rotate-tl-enter
    .rotate-tl-enter-active
        animation: rotate-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-tl-leave
    .rotate-tl-leave-active
        animation: rotate-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
      
    @keyframes rotate-in-tl 
        0% 
            transform: rotate(-360deg)
            transform-origin: top left
            opacity: 0
        100% 
            transform: rotate(0deg)
            transform-origin: top left
            opacity: 1

    @keyframes rotate-out-tl 
        0% 
            transform: rotate(0)
            transform-origin: top left
            opacity: 1
        100% 
            transform: rotate(-360deg)
            transform-origin: top left
            opacity: 0

    .rotate-center-enter
    .rotate-center-enter-active
        animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-center-leave
    .rotate-center-leave-active
        animation: rotate-out-center 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @keyframes rotate-in-center 
        0% 
            transform: rotate(-360deg)
            opacity: 0
        100% 
            transform: rotate(0)
            opacity: 1
      
    @keyframes rotate-out-center 
        0% 
            transform: rotate(0)
            opacity: 1
        100% 
            transform: rotate(-360deg)
            opacity: 0


    .scale-ver-top-enter
    .scale-ver-top-enter-active
        animation: scale-in-ver-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .scale-ver-top-leave
    .scale-ver-top-leave-active
        animation: scale-out-ver-top 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @keyframes scale-in-ver-top 
        0% 
            transform: scaleY(0)
            transform-origin: 100% 0%
            opacity: 1

        100% 
            transform: scaleY(1)
            transform-origin: 100% 0%
            opacity: 1

    @keyframes scale-out-ver-top 
        0% 
            transform: scaleY(1)
            transform-origin: 100% 0%
            opacity: 1

        100% 
            transform: scaleY(0)
            transform-origin: 100% 0%
            opacity: 1


</style>
