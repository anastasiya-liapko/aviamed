import months from '@/data/months.js';

const state = {
    month: ''
};

const mutations = {
    'TRANSLATE_MONTH' (state, element) {
        months.forEach(function(month) {
            switch(element) {
                case month.en:
                    return state.month = month.ru
                    break;
            }
        })
    }
};

const actions = {
    translateMonth: ({ commit }, element) => {
        commit('TRANSLATE_MONTH', element);
    }
};

const getters = {
    month: state => {
        return state.month;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};