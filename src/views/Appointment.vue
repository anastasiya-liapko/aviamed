<template>
    <div class="appointment">
        <div class="container">
            <form class="appointment__form row flex-column">
                <h1 class="app__title appointment__title_main" style="border: 1px solid red">Услуги клиники</h1>

                <h2 class="appointment__title" style="border: 1px solid red">Выберите услугу или специалиста...</h2>
                <div class="appointment__services row justify-content-between" style="border: 1px solid red">
                    <app-select
                        id="js-appointmentSpecialization"
                        class="select mb-2"

                        :placeholder="'Специализация'"
                        :options="specializations"
                        :selected="specialization"
                        v-on:updateOption="selectSpecialization">
                    </app-select>

                    <div
                        class="input services mb-2 mb-md-0" 
                        :class="{invalid: !$v.appointment.service.required && $v.appointment.service.$invalid && touchService}" 
                        style="border: 1px solid red">
                        <app-select
                            id="js-appointmentService"
                            class="select"
                            :placeholder="'Услуга'"
                            :options="services"
                            :selected="service"
                            v-on:updateOption="selectService">
                        </app-select>
                        <p v-if="!$v.appointment.service.required && $v.appointment.service.$invalid && touchService">Выберите услугу или специалиста</p>
                    </div>

                    <div
                        class="input doctors" 
                        :class="{invalid: !$v.appointment.doctor.required && $v.appointment.doctor.$invalid && touchDoctor}" 
                        style="border: 1px solid red">
                        <app-select
                            id="js-appointmentDoctor"
                            class="select"
                            :placeholder="'Врач'"
                            :options="doctors"
                            :selected="doctor"
                            @blur="$v.appointment.doctor.$touch()"
                            v-on:updateOption="selectDoctor">
                        </app-select>
                        <p v-if="!$v.appointment.doctor.required && $v.appointment.doctor.$invalid && touchDoctor">Выберите услугу или специалиста</p>
                    </div>
                </div>

                <h2 class="appointment__title" style="border: 1px solid red">...желаемую дату и время посещения...</h2>

                <div class="appointment__date row flex-column flex-md-row flex-nowrap" style="border: 1px solid red">
                    <div class="row col-12 col-md-6 flex-column justify-content-between mb-3 mb-md-0 pl-0" style="border: 1px solid green">
                        <app-date 
                            class="date-picker row justify-content-center" 
                            v-on:pickDate="updateDate"
                            style="border: 1px solid red">
                        </app-date>

                        <div
                            class="input date w-100" 
                            :class="{invalid: $v.appointment.date.$error}" 
                            style="border: 1px solid red">
                            <input 
                                id="appointmentDate"
                                class="date__input w-100"
                                name="date"
                                :placeholder="appointment.date"
                                @blur="$v.appointment.date.$touch()"
                                v-model="appointment.date">
                            <p v-if="!$v.appointment.date.required && $v.appointment.date.$dirty">Это обязательное поле</p>
                        </div>
                    </div>
                    
                    <div class="time row col-12 col-md-6 flex-column justify-content-between pr-0" style="border: 1px solid green">
                        <app-time 
                            class="time-picker"
                            v-on:pickTime="updateTime" 
                            style="border: 1px solid red">
                        </app-time>

                        <div
                            class="input date w-100" 
                            :class="{invalid: $v.appointment.time.$error}" 
                            style="border: 1px solid red">
                            <input 
                                id="appointmentTime"
                                class="time__input w-100"
                                name="time"
                                :placeholder="appointment.time"
                                @blur="$v.appointment.time.$touch()"
                                v-model="appointment.time">
                            <p v-if="!$v.appointment.time.required && $v.appointment.time.$dirty">Это обязательное поле</p>
                        </div>
                    </div>
                </div>

                <h2 class="appointment__title" style="border: 1px solid red">...укажите ваши контактные данные...</h2>
                <div class="appointment__contacts row justify-content-between" style="border: 1px solid red">
                    <div 
                        class="input name mb-2 w-100" 
                        :class="{invalid: $v.appointment.name.$error}" 
                        style="border: 1px solid red">
                        <input 
                            id="appointmentName"
                            class="name__input w-100"
                            name="name"
                            placeholder="Ваше имя"
                            @blur="$v.appointment.name.$touch()"
                            v-model="appointment.name">
                        <p v-if="!$v.appointment.name.required && $v.appointment.name.$dirty">Это обязательное поле</p>
                    </div>

                    <div 
                        class="input phone mb-2 mb-md-0" 
                        :class="{invalid: $v.appointment.phone.$error}" 
                        style="border: 1px solid red">
                        <input 
                            id="appointmentPhone"
                            class="phone__input w-100" 
                            name="phone"
                            placeholder="Телефон"
                            @blur="$v.appointment.phone.$touch()"
                            v-model="appointment.phone">
                        <p v-if="!$v.appointment.phone.required && $v.appointment.phone.$dirty">Укажите телефон или email</p>
                    </div>
                    

                    <div 
                        class="input email" 
                        :class="{invalid: $v.appointment.email.$error}" 
                        style="border: 1px solid red">
                        <input 
                            id="appointmentEmail"
                            class="email__input w-100"
                            name="email" 
                            placeholder="E-mail"
                            @blur="$v.appointment.email.$touch()"
                            v-model="appointment.email">
                        <p v-if="!$v.appointment.email.required && $v.appointment.email.$dirty">Укажите телефон или email</p>
                        <p v-if="!$v.appointment.email.email">Введите e-mail в формате default@mail.com</p>
                    </div>
                    
                </div>

                <button 
                    class="appointment__submit btn" 
                    @click.prevent="submit"
                    :disabled="$v.$invalid" 
                    style="border: 1px solid red">
                    Записаться
                </button>

                <p>{{ appointment }}</p>

            </form>
        </div>
    </div>
</template>

<script>
    import DatePicker from '../components/DatePicker.vue'
    import TimePicker from '../components/TimePicker.vue'
    import Select from '../components/Select.vue'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import { required, email, requiredUnless } from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                appointment: {
                    specialization: '',
                    service: '',
                    doctor: '',
                    date: new Date().toLocaleString().split(',').shift(),
                    time: new Date().getHours() + 1 + ':00',
                    name: '',
                    phone: '',
                    email: ''
                },
                specializations: [ 
                    {name: 'Диетология'},
                    {name: 'Ксенонотерапия'}, 
                    {name: 'Маммология'}
                ],
                specialization: { name: 'Специализация' },
                services: [ 
                    {name: 'Осмотр'}, 
                    {name: 'Осмотр'} 
                ],
                service: { name: 'Услуга' },
                doctors: [ 
                    {name: 'Фокина Светлана Николаевна'}, 
                    {name: 'Шабунина Ирина Юрьевна'},
                    {name: 'Ухабина Ирина Юрьевна'}
                ],
                doctor: { name: 'Врач' },
                touchService: false,
                touchDoctor: false
            }
        },
        validations: {
            appointment: {
                service: {
                    required: requiredUnless('doctor')
                },
                doctor: {
                    required: requiredUnless('service')
                },
                date: {
                    required
                },
                time: {
                    required
                },
                name: {
                    required
                },
                phone: {
                    required: requiredUnless('email')
                },
                email: {
                    required: requiredUnless('phone'),
                    email
                }
            }
        },
        methods: {
            selectSpecialization(value) {
                this.specialization = value;
                this.appointment.specialization = value.name;
            },
            selectService(value) {
                this.service = value;
                this.appointment.service = value.name;
                this.touchService = true;
            },
            selectDoctor(value) {
                this.doctor = value;
                this.appointment.doctor = value.name;
                this.touchDoctor = true;
            },
            updateDate(value) {
                this.appointment.date = value;
            },
            updateTime(value) {
                this.appointment.time = value;
            },
            touchServiceMethod() {
                this.v.appointment.service.$touch();
                this.appointment.touchService = true;
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
            'app-date': DatePicker,
            'app-time': TimePicker,
            'app-select': Select
        }
    }
 
</script>

<style lang="sass">
    .appointment
        .container
            background-color: lightgrey

    .appointment__title
        margin-top: 35px
        margin-bottom: 35px
        font-size: 1.5rem
        text-align: center
        &:nth-child(2)
            margin-top: 10px

    .appointment__services
        .services,
        .doctors
            width: 48%


    .date__input,
    .time__input
        pointer-events: none

    .date-picker ol li.day.selected[data-v-7c712536]:after
        background: transparent

    // .time__table
    //     width: 100%
    //     height: 200px

    .phone,
    .email
        width: 48%

    .appointment__submit
        width: 300px
        margin-top: 25px
        margin-bottom: 100px
        margin-left: auto
        margin-right: auto
        background-color: red

    .input.invalid
        input,
        .select__toggle
            border: 1px solid red
            background-color: #ffc9aa
        p
            margin-bottom: 0

    
    @media(max-width: 767px)
        .appointment__date>div
            padding-left: 0
            padding-right: 0

        .phone,
        .email,
        .appointment__submit,
        .appointment__services .services,
        .appointment__services .doctors
            width: 100%

</style>
