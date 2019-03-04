<template>
    <div class="time-picker">
    
        <div class="time-picker-wrap">
            <table class="table">
                <thead>
                    <tr class="time-picker-head">
                        <th 
                            colspan="7" 
                            class="table__title">
                            <span>Время</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                        v-for="(v, i) in 3" 
                        :key="i">
                    <td 
                        v-for="(v, j) in 7"
                        :key=""
                        @click="pickTime(i * 7 + j + 1 + ':00')">
                        {{ i * 7 + j + 1 }} : 00
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pickedValue: new Date().getHours() + 1 + ':00'
            }
        },
        methods: {
            pickTime(value) {
                this.pickedValue = value;
                this.$emit('pickTime', this.pickedValue);
            }
        }
    }
</script>

<style lang="sass">
    .time-picker 
        margin-bottom: 25px   
        td
            height: 40px
            padding: 0
            font-size: 13px
            line-height: 40px
            text-align: center
            &:hover
                cursor: pointer

    .time-picker-wrap
        background-color: #fff

    .table__title
        text-align: center

  
</style>