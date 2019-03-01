import nav from '@/data/nav.js';

const state = {
    nav: nav,
    show: false
};

const mutations = {
    'SWITCH_SHOW_NAV' () {
        state.show = !state.show;
    }
};

const actions = {
    switchShowNav: ({ commit }) => {
        commit('SWITCH_SHOW_NAV');
    }
};

const getters = {
    nav: state => {
        return state.nav;
    },
    showNav: state => {
        return state.show;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};