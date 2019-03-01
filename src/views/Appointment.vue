<template>
    <div class="appointment">
        <div class="container">
            <form class="appointment__form row flex-column">

                <div class="appointment__services">
                    
                </div>

                <div class="appointment__date row flex-nowrap">
                    <div class="date col-6">
                        <!-- <h1>Selected Date: {{ date }}</h1> -->
                        <date-picker class="date__calendar" v-model="date">
                            <!-- <template slot="day" slot-scope="{ day }">
                                {{ day }}
                            </template> -->
                            <template v-slot:header="month">
                                {{ translate(month.month) }} {{ months }}
                            </template>
                        </date-picker>
                        <input class="date__input" :value="date">
                    </div>
                    
                    <div class="time col-6">
                        <div class="time__table"></div>
                        <input class="time__input">
                    </div>
                </div>

                <div class="appointment__contacts">
                    <input class="name">
                    <input class="phone">
                    <input class="email">
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import DatePicker from 'v-cal-input'
    // import DatePicker from '../components/DatePicker.vue'

    export default {
        data() {
            return { 
                date: null,
                months: ''
            }
        },
        methods: {
            translate(element) {
                switch(element) {
                    case 'January':
                        this.months = 'Январь'
                        break;

                    case 'February':
                        this.months = 'Февраль'
                        break;

                    case 'March':
                        this.months = 'Март'
                        break;

                    case 'April':
                        this.months = 'Апрель'
                        break;

                    case 'May':
                        this.months = 'Май'
                        break;

                    case 'June':
                        this.months = 'Июнь'
                        break;

                    case 'July':
                        this.months = 'Июль'
                        break;

                    case 'August':
                        this.months = 'Август'
                        break;

                    case 'September':
                        this.months = 'Сентябрь'
                        break;

                    case 'October':
                        this.months = 'Октябрь'
                        break;

                    case 'November':
                        this.months = 'Ноябрь'
                        break;

                    case 'December':
                        this.months = 'Декабрь'
                        break;
                }
            }
        },
        components: { 
            DatePicker 
        }
    }
</script>

<style lang="sass">
    .appointment
        height: 100%
        .container
            height: 100%
            background-color: lightgrey
    .appointment__services
        width: 100%
        height: 200px
        border: 1px solid red

    .date
        border: 1px solid red

    .date-picker ol li.day.selected[data-v-7c712536]:after
        background: transparent

    .time
        border: 1px solid red
</style>
