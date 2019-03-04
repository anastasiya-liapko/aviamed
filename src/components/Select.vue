<template>
    <div 
        class="select" 
        :class="{isOpened: showMenu}">
        <li 
            @click="toggleMenu()" 
            class="select__toggle" 
            :class="{opened: showMenu}" 
            v-show="selectedOption.name !== undefined">
            {{ selectedOption.name }}
            <span class="select__caret"></span>
        </li>

        <li 
            @click="toggleMenu()" 
            class="select__toggle" 
            :class="{opened: showMenu}" 
            v-show="selectedOption.name === undefined">
            {{placeholderText}}
            <span class="select__caret"></span>
        </li>

        <transition name="rotate-hor" appear>
            <ul 
                class="select__menu" 
                v-show="showMenu" 
                :class="{opened: showMenu}">
                <li>
                    <a 
                        href="javascript:void(0)" 
                        @click="updateOption('')" 
                        :class="{isSelected: selectedOption.name === ''}">
                    </a>
                </li>
                <li v-for="option in options">
                    <a 
                        href="javascript:void(0)" 
                        @click="updateOption(option)" 
                        :class="{isSelected: option.name === selectedOption.name}">
                        {{ option.name }}
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    import { hideMixin } from '../mixins'

    export default {
        data() {
            return {
                selectedOption: {
                    name: '',
                },
                showMenu: false,
                placeholderText: 'Please select an item'
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            placeholder: [String]
        },
        mounted: function() {
            console.log(this.placeholder);
            this.selectedOption.name = this.placeholder;
            if (this.placeholder) {
                this.placeholderText = this.placeholder;
            }
        },
        methods: {
            updateOption: function(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },
            toggleMenu: function() {
                this.showMenu = !this.showMenu;
            },
            hide(e) {
                var selectMenu = document.querySelector('.select__menu.opened');
                var toggleMenu = document.querySelector('.select__toggle.opened');
                if (selectMenu !== null && toggleMenu !== null) {
                    if (!selectMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
                        this.showMenu = false;
                    }
                }
            },
        },
        mixins: [hideMixin]
    }
</script>

<style lang="sass">
    .select 
        position: relative
        display: inline-block
        min-width: 160px
        width: 100%
        height: 40px
        vertical-align: middle
        transition: all 0.1s ease
        a:hover
          text-decoration: none
        .isSelected
          color: rgb(255, 255, 255)
          background-color: rgb(132, 198, 4)
        &.isOpened .select__caret
          top: 8px
          transform: rotate(540deg)

    .select__toggle 
        position: relative
        z-index: 20
        float: none
        min-width: 160px
        height: 40px
        margin-bottom: 7px
        padding: 10px
        font-size: 14px
        font-weight: 400
        text-transform: none
        color: rgb(0, 0, 0)
        background-color: transparent
        border: 0
        border-bottom: 1px solid rgb(132, 198, 4)
        border-radius: 0
        box-shadow: none
        transition: background 0s ease-out
        transition: all 0.1s ease
        &:hover 
          color: rgb(255, 255, 255)
          background-color: rgb(132, 198, 4)
          cursor: pointer
        &:hover .select__caret
          border-top: 4px solid rgb(255, 255, 255)
  
    .select__menu 
        position: absolute
        top: 40px
        left: 0
        z-index: 30
        float: left
        min-width: 160px
        width: 100%
        height: auto
        margin: 2px 0 0
        padding: 5px 0
        list-style: none
        font-size: 14px
        font-weight: 400
        text-align: left
        color: rgb(0, 0, 0)
        background-color: #fff
        border: 1px solid rgb(132, 198, 4)
        border-radius: 4px
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175)
        background-clip: padding-box
        overflow: hidden
        & > li > a 
          clear: both
          display: block
          height: 40px
          padding: 10px 30px
          font-weight: 400
          line-height: 1.6
          color: #333333
          white-space: nowrap
          text-decoration: none
        & > li > a:hover 
          color: rgb(255, 255, 255)
          background-color: rgb(132, 198, 4)
        & > li 
          position: relative
          width: 100%
          margin: 0
          overflow: hidden
  
    .select__caret 
        position: relative
        top: 9px
        float: right
        display: relative
        width: 0
        height: 0
        margin-left: 2px
        vertical-align: middle
        border-top: 4px dashed
        border-top: 4px solid rgb(132, 198, 4)
        border-right: 4px solid transparent
        border-left: 4px solid transparent
        transform: rotate(0deg)
        transition: all 0.3s ease
  
    li 
        list-style: none
  
</style>