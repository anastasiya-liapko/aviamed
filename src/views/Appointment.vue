<template>
    <div class="appointment">
        <div class="container">
            <form class="appointment__form row flex-column">

                <div class="appointment__services">
                    
                </div>

                <div class="appointment__date row flex-nowrap">
                    <div class="date col-6">

                        <p>{{ appointment.date }}</p>
                        <date-picker 
                            class="date__calendar" 
                            v-model.number="appointment.date">
                            <template v-slot:header="month">
                                {{ translate(month.month) }}
                            </template>
                        </date-picker>

                        <input 
                            class="date__input"
                            name="date"
                            placeholder="26.09.2019" 
                            v-model.number="appointment.date">

                    </div>
                    
                    <div class="time col-6">
                        <div class="time__table"></div>
                        <input 
                            class="time__input"
                            name="time"
                            placeholder="11:00"
                            v-model="appointment.time">
                    </div>
                </div>

                <div class="appointment__contacts">
                    <input 
                        class="name"
                        name="name"
                        placeholder="Ваше имя"
                        v-model="appointment.name">
                    <input 
                        class="phone" 
                        name="phone"
                        placeholder="Телефон"
                        v-model="appointment.phone">
                    <input 
                        class="email"
                        name="email" 
                        placeholder="E-mail"
                        v-model="appointment.email">
                </div>

                <button @click.prevent="submit">Записаться</button>

            </form>
        </div>
    </div>
</template>

<script>
    import DatePicker from 'v-cal-input'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                appointment: {
                    specialization: '',
                    service: '',
                    doctor: '',
                    date: null,
                    time: '',
                    name: '',
                    phone: '',
                    email: ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'month'
            ])
        },
        methods: {
            ...mapActions([
                'translateMonth'
            ]),
            translate(element) {
                this.translateMonth(element);
                return this.month;
            },
            submit() {
                this.$http.post('/upload.php', this.appointment)
                    .then(
                        response => 
                        {
                            console.log('post-ok');
                            console.log(response);
                        }, 
                        error => 
                        {
                            console.log('post-error');
                            console.log(error);
                        });
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
