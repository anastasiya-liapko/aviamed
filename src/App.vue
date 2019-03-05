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

    .page
        flex-grow: 1

    .page__title
        margin-top: 100px
        text-align: center

    .footer
        margin-top: auto

    .container
        height: 100%
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
            border: none

    img
        width: 100%
        height: auto

    .table
        margin-bottom: 0

    .btn:focus
        box-shadow: none !important

    .flip-enter-active
        -webkit-animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .flip-leave-active
        -webkit-animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes flip-in-ver-left
        0% 
            -webkit-transform: rotateY(80deg)
            transform: rotateY(80deg)
            opacity: 0
        100% 
            -webkit-transform: rotateY(0)
            transform: rotateY(0)
            opacity: 1

    @keyframes flip-in-ver-left
        0% 
            -webkit-transform: rotateY(80deg)
            transform: rotateY(80deg)
            opacity: 0
        100% 
            -webkit-transform: rotateY(0)
            transform: rotateY(0)
            opacity: 1

    @-webkit-keyframes flip-out-ver-left
        0% 
            -webkit-transform: rotateY(0)
            transform: rotateY(0)
            opacity: 1
        100% 
            -webkit-transform: rotateY(-70deg)
            transform: rotateY(-70deg)
            opacity: 0
    @keyframes flip-out-ver-left
        0% 
            -webkit-transform: rotateY(0)
            transform: rotateY(0)
            opacity: 1
        100% 
            -webkit-transform: rotateY(-70deg)
            transform: rotateY(-70deg)
            opacity: 0

    .swing-enter-active
        -webkit-animation: swing-in-top-fwd 1.05s cubic-bezier(0.175, 0.885, 0.320, 1.275) both
        animation: swing-in-top-fwd 1.05s cubic-bezier(0.175, 0.885, 0.320, 1.275) both

    .swing-leave-active
        -webkit-animation: swing-out-top-bck 1s cubic-bezier(0.600, -0.280, 0.735, 0.045) both
        animation: swing-out-top-bck 1s cubic-bezier(0.600, -0.280, 0.735, 0.045) both

    @-webkit-keyframes swing-in-top-fwd 
        0% 
            -webkit-transform: rotateX(-100deg)
            transform: rotateX(-100deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 0
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 1

    @keyframes swing-in-top-fwd 
        0% 
            -webkit-transform: rotateX(-100deg)
            transform: rotateX(-100deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 0
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 1

    @-webkit-keyframes swing-out-top-bck 
        0% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 1
        100% 
            -webkit-transform: rotateX(-100deg)
            transform: rotateX(-100deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 0
          
    @keyframes swing-out-top-bck 
        0% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 1
        100% 
            -webkit-transform: rotateX(-100deg)
            transform: rotateX(-100deg)
            -webkit-transform-origin: top
            transform-origin: top
            opacity: 0

    .slide-elliptic-enter-active
        -webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-elliptic-leave-active
        -webkit-animation: slide-out-elliptic-top-bck 0.7s ease-in both
        animation: slide-out-elliptic-top-bck 0.7s ease-in both

    @-webkit-keyframes slide-in-elliptic-top-fwd 
        0% 
            -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            -webkit-transform-origin: 50% 100%
            transform-origin: 50% 100%
            opacity: 0
        100% 
            -webkit-transform: translateY(0) rotateX(0) scale(1)
            transform: translateY(0) rotateX(0) scale(1)
            -webkit-transform-origin: 50% 1400px
            transform-origin: 50% 1400px
            opacity: 1

    @keyframes slide-in-elliptic-top-fwd 
        0% 
            -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            -webkit-transform-origin: 50% 100%
            transform-origin: 50% 100%
            opacity: 0
        100% 
            -webkit-transform: translateY(0) rotateX(0) scale(1)
            transform: translateY(0) rotateX(0) scale(1)
            -webkit-transform-origin: 50% 1400px
            transform-origin: 50% 1400px
            opacity: 1

    @-webkit-keyframes slide-out-elliptic-top-bck
        0% 
            -webkit-transform: translateY(0) rotateX(0) scale(1)
            transform: translateY(0) rotateX(0) scale(1)
            -webkit-transform-origin: 50% 1400px
            transform-origin: 50% 1400px
            opacity: 1
        100% 
            -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            -webkit-transform-origin: 50% 100%
            transform-origin: 50% 100%
            opacity: 1

    @keyframes slide-out-elliptic-top-bck
        0% 
            -webkit-transform: translateY(0) rotateX(0) scale(1)
            transform: translateY(0) rotateX(0) scale(1)
            -webkit-transform-origin: 50% 1400px
            transform-origin: 50% 1400px
            opacity: 1
        100% 
            -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0)
            transform: translateY(-600px) rotateX(-30deg) scale(0)
            -webkit-transform-origin: 50% 100%
            transform-origin: 50% 100%
            opacity: 1

    .slide-left-enter-active
        -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-left-leave-active
        -webkit-animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes slide-in-right 
        0% 
            -webkit-transform: translateX(1000px)
            transform: translateX(1000px)
            opacity: 0
        100% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            opacity: 1

    @keyframes slide-in-right 
        0% 
            -webkit-transform: translateX(1000px)
            transform: translateX(1000px)
            opacity: 0
        100% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            opacity: 1

    @-webkit-keyframes slide-out-left 
        0% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px)
            transform: translateX(-1000px)
            opacity: 0

    @keyframes slide-out-left 
        0% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px)
            transform: translateX(-1000px)
            opacity: 0

    .slide-top-enter-active
        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .slide-top-leave-active
        -webkit-animation: slide-out-top 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: slide-out-top 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        // opacity: 0
        // position: absolute

    @-webkit-keyframes slide-in-top 
        0% 
            -webkit-transform: translateY(-1000px)
            transform: translateY(-1000px)
            opacity: 0
        100% 
            -webkit-transform: translateY(0)
            transform: translateY(0)
            opacity: 1
  
    @keyframes slide-in-top 
        0% 
            -webkit-transform: translateY(-1000px)
            transform: translateY(-1000px)
            opacity: 0
        100% 
            -webkit-transform: translateY(0)
            transform: translateY(0)
            opacity: 1

    @-webkit-keyframes slide-out-top 
        0% 
            -webkit-transform: translateY(0)
            transform: translateY(0)
            opacity: 1
        100% 
            -webkit-transform: translateY(-1000px)
            transform: translateY(-1000px)
            opacity: 0
  
    @keyframes slide-out-top 
        0% 
            -webkit-transform: translateY(0)
            transform: translateY(0)
            opacity: 1
        100% 
            -webkit-transform: translateY(-1000px)
            transform: translateY(-1000px)
            opacity: 0


    .roll-enter
    .roll-enter-active
        -webkit-animation: roll-in-left 0.6s ease-out both
        animation: roll-in-left 0.6s ease-out both
        
    .roll-leave
    .roll-leave-active
        -webkit-animation: roll-out-left 0.6s ease-in both
        animation: roll-out-left 0.6s ease-in both

    @-webkit-keyframes roll-in-left 
        0%
            -webkit-transform: translateX(-800px) rotate(-540deg)
            transform: translateX(-800px) rotate(-540deg)
            opacity: 0
        100%
            -webkit-transform: translateX(0) rotate(0deg)
            transform: translateX(0) rotate(0deg)
            opacity: 1
    @keyframes roll-in-left 
        0%
            -webkit-transform: translateX(-800px) rotate(-540deg)
            transform: translateX(-800px) rotate(-540deg)
            opacity: 0
        100% 
            -webkit-transform: translateX(0) rotate(0deg)
            transform: translateX(0) rotate(0deg)
            opacity: 1

    @-webkit-keyframes roll-out-left 
        0% 
            -webkit-transform: translateX(0) rotate(0deg)
            transform: translateX(0) rotate(0deg)
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px) rotate(-540deg)
            transform: translateX(-1000px) rotate(-540deg)
            opacity: 0
    @keyframes roll-out-left 
        0% 
            -webkit-transform: translateX(0) rotate(0deg)
            transform: translateX(0) rotate(0deg)
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px) rotate(-540deg)
            transform: translateX(-1000px) rotate(-540deg)
            opacity: 0

    .scale-top-enter
    .scale-top-enter-active
        -webkit-animation: scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        
    .scale-top-leave
    .scale-top-leave-active
        -webkit-animation: scale-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: scale-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes scale-in-top 
        0% 
            -webkit-transform: scale(0)
            transform: scale(0)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1
  
        100% 
            -webkit-transform: scale(1)
            transform: scale(1)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1
  
    @keyframes scale-in-top 
        0% 
            -webkit-transform: scale(0)
            transform: scale(0)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1
        100% 
            -webkit-transform: scale(1)
            transform: scale(1)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1

    @-webkit-keyframes scale-out-top 
        0% 
            -webkit-transform: scale(1)
            transform: scale(1)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1
        100% 
            -webkit-transform: scale(0)
            transform: scale(0)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1

    @keyframes scale-out-top 
        0% 
            -webkit-transform: scale(1)
            transform: scale(1)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1
        100% 
            -webkit-transform: scale(0)
            transform: scale(0)
            -webkit-transform-origin: 50% 0%
            transform-origin: 50% 0%
            opacity: 1

    .bounce-left-enter
    .bounce-left-enter-active
        -webkit-animation: bounce-in-left 1.1s both
        animation: bounce-in-left 1.1s both
        
    .bounce-left-leave
    .bounce-left-leave-active
        -webkit-animation: bounce-out-left 1.5s both
        animation: bounce-out-left 1.5s both

    @-webkit-keyframes bounce-in-left 
        0% 
            -webkit-transform: translateX(-600px)
            transform: translateX(-600px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
            opacity: 0
        38%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
            opacity: 1
        55% 
            -webkit-transform: translateX(-68px)
            transform: translateX(-68px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        72% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        81% 
            -webkit-transform: translateX(-28px)
            transform: translateX(-28px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        90% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        95%
            -webkit-transform: translateX(-8px)
            transform: translateX(-8px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        100%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
  
    @keyframes bounce-in-left 
        0%
            -webkit-transform: translateX(-600px)
            transform: translateX(-600px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
            opacity: 0
        38%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
            opacity: 1
        55% 
            -webkit-transform: translateX(-68px)
            transform: translateX(-68px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        72%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        81% 
            -webkit-transform: translateX(-28px)
            transform: translateX(-28px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        90% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        95% 
            -webkit-transform: translateX(-8px)
            transform: translateX(-8px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        100% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out

    @-webkit-keyframes bounce-out-left
        0% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        5% 
            -webkit-transform: translateX(-30px)
            transform: translateX(-30px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        15% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        25% 
            -webkit-transform: translateX(-38px)
            transform: translateX(-38px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
  
        38% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        52% 
            -webkit-transform: translateX(-80px)
            transform: translateX(-80px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        70% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        85% 
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px)
            transform: translateX(-1000px)
            opacity: 0

    @keyframes bounce-out-left 
        0% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        5% 
            -webkit-transform: translateX(-30px)
            transform: translateX(-30px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        15%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        25% 
            -webkit-transform: translateX(-38px)
            transform: translateX(-38px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        38% 
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        52%
            -webkit-transform: translateX(-80px)
            transform: translateX(-80px)
            -webkit-animation-timing-function: ease-in
            animation-timing-function: ease-in
        70%
            -webkit-transform: translateX(0)
            transform: translateX(0)
            -webkit-animation-timing-function: ease-out
            animation-timing-function: ease-out
        85%
            opacity: 1
        100% 
            -webkit-transform: translateX(-1000px)
            transform: translateX(-1000px)
            opacity: 0

    .rotate-hor-enter
    .rotate-hor-enter-active
        -webkit-animation: rotate-in-hor 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: rotate-in-hor 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-hor-leave
    .rotate-hor-leave-active
        -webkit-animation: rotate-out-hor 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: rotate-out-hor 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes rotate-in-hor 
        0%
            -webkit-transform: rotateX(360deg)
            transform: rotateX(360deg)
            opacity: 0
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            opacity: 1

    @keyframes rotate-in-hor 
        0% 
            -webkit-transform: rotateX(360deg)
            transform: rotateX(360deg)
            opacity: 0
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            opacity: 1

    @-webkit-keyframes rotate-out-hor 
        0% 
            -webkit-transform: rotateX(360deg)
            transform: rotateX(360deg)
            opacity: 1
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            opacity: 0
  
    @keyframes rotate-out-hor 
        0%
            -webkit-transform: rotateX(360deg)
            transform: rotateX(360deg)
            opacity: 1
        100% 
            -webkit-transform: rotateX(0deg)
            transform: rotateX(0deg)
            opacity: 0

    .rotate-tl-enter
    .rotate-tl-enter-active
        -webkit-animation: rotate-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: rotate-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-tl-leave
    .rotate-tl-leave-active
        -webkit-animation: rotate-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: rotate-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes rotate-in-tl 
        0% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 0
        100% 
            -webkit-transform: rotate(0deg)
            transform: rotate(0deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 1
      
    @keyframes rotate-in-tl 
        0% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 0
        100% 
            -webkit-transform: rotate(0deg)
            transform: rotate(0deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 1

    @-webkit-keyframes rotate-out-tl 
        0% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 1
        100% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 0

    @keyframes rotate-out-tl 
        0% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 1
        100% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            -webkit-transform-origin: top left
            transform-origin: top left
            opacity: 0

    .rotate-center-enter
    .rotate-center-enter-active
        -webkit-animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

    .rotate-center-leave
    .rotate-center-leave-active
        -webkit-animation: rotate-out-center 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
        animation: rotate-out-center 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

    @-webkit-keyframes rotate-in-center 
        0% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            opacity: 0
        100% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            opacity: 1

    @keyframes rotate-in-center 
        0% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            opacity: 0
        100% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            opacity: 1

    @-webkit-keyframes rotate-out-center 
        0% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            opacity: 1
        100% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            opacity: 0
      
    @keyframes rotate-out-center 
        0% 
            -webkit-transform: rotate(0)
            transform: rotate(0)
            opacity: 1
        100% 
            -webkit-transform: rotate(-360deg)
            transform: rotate(-360deg)
            opacity: 0





</style>
