import selects from '@/data/selects'

const state = {
    showSpecializations: false,
    showServices: false,
    showDoctors: false,
    specializations: selects.specializations,
    services: selects.services,
    doctors: selects.doctors
};

const mutations = {
    'TOGGLE_SELECT' (state, {name, show}) {
        switch (name) {
            case 'specialization':
                state.showSpecializations = !show;
                break;
            case 'service':
                state.showServices = !show;
                break;
            case 'doctor':
                state.showDoctors = !show;
                break;
        }
    },
    'HIDE_SELECT' (state, name) {
        switch (name) {
            case 'specialization':
                state.showSpecializations = false;
                break;
            case 'service':
                state.showServices = false;
                break;
            case 'doctor':
                state.showDoctors = false;
                break;
        }
    },
    'FILTER_SELECT' (state, {name, id}) {
        switch (name) {
            case 'specialization':
                state.services = {};
                selects.services.forEach(function(element, i) {
                    if (element.specialization_id === id) {
                        state.services[i] = element;
                    }
                });
                state.doctors = {};
                // console.log(state.services);
                // var obj = state.services;
                // obj.forEach(function(service, service_i) {
                    selects.doctors.forEach(function(doctor, doctor_i) {
                        if (doctor.service_id === 1) {
                            state.doctors[doctor_i] = doctor;
                        }
                    });
                // })
                
                break;
            case 'service':
                state.doctors = {};
                selects.doctors.forEach(function(element, i) {
                    if (element.service_id === id) {
                        state.doctors[i] = element;
                    }
                });
                // state.showServices = false;
                break;
            case 'doctor':
                // state.showDoctors = false;
                break;
        }
    },
    'RESET_SELECT' (state, {name}) {
        switch (name) {
            case 'specialization':
                state.services = selects.services;
                state.doctors = selects.doctors;
                break;
            case 'service':
                state.doctors = selects.doctors;
                // state.showServices = false;
                break;
            case 'doctor':
                // state.showDoctors = false;
                break;
        }
    }
};

const actions = {
    toggleSelect({ commit }, value) {
        commit('TOGGLE_SELECT', value);
    },
    hideSelect({ commit }, value) {
        commit('HIDE_SELECT', value);
    },
    filterSelect({ commit }, value) {
        commit('FILTER_SELECT', value);
    },
    resetSelect({ commit }, value) {
        commit('RESET_SELECT', value);
    }
};

const getters = {
    selectSpecializations: state => {
        return state.specializations;
    },
    selectServices: state => {
        return state.services;
    },
    selectDoctors: state => {
        return state.doctors;
    },
    showSpecializations: state => {
        return state.showSpecializations;
    },
    showServices: state => {
        return state.showServices;
    },
    showDoctors: state => {
        return state.showDoctors;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};