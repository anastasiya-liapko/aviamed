import select from '@/data/appointmentSelect'

const state = {
    specializations: select.specializations,
    specialization: '',
    services: select.services,
    service: '',
    doctors: select.doctors,
    doctor: ''
};

const mutations = {
    'SELECT_SPECIALIZATION' (state, value) {
        state.specialization = value;
    },
    'SELECT_SERVICE' (stte, value) {
        state.specialization = value;
    },
    'SELECT_DOCTOR' (state, value) {
        state.specialization = value;
    }
};

const actions = {
    appointmentSelectSpecialization: ({ commit }, value) => {
        commit('SELECT_SPECIALIZATION', value);
    },
    appointmentSelectService: ({ commit }, value) => {
        commit('SELECT_SERVICE', value);
    },
    appointmentSelectDoctor: ({ commit }, value) => {
        commit('SELECT_DOCTOR', value);
    }
};

const getters = {
    appointmentSpecializations: state => {
        return state.specializations;
    },
    appointmentSpecialization: state => {
        return state.specialization;
    },
    appointmentServices: state => {
        return state.services;
    },
    appointmentService: state => {
        return state.service;
    },
    appointmentDoctors: state => {
        return state.doctors;
    },
    appointmentDoctor: state => {
        return state.doctor;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};