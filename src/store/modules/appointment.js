import select from '@/data/appointmentSelect'

const state = {
    specializations: select.specializations,
    services: select.services,
    doctors: select.doctors
};

const mutations = {

};

const actions = {

};

const getters = {
    appointmentSpecializations: state => {
        return state.specializations;
    },
    appointmentServices: state => {
        return state.services;
    },
    appointmentDoctors: state => {
        return state.doctors;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};