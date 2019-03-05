import doctors from '@/data/doctors'
import partners from '@/data/partners'
import clinics from '@/data/clinics'

const state = {
    doctors: doctors,
    partners: partners,
    clinics: clinics
};

const mutations = {
    
};

const actions = {
    
};

const getters = {
    doctors: state => {
        return state.doctors;
    },
    partners: state => {
        return state.partners;
    },
    clinics: state => {
        return state.clinics;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};