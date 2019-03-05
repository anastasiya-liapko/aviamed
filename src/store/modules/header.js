import headerNav from '@/data/headerNav'

const state = {
    nav: headerNav,
    show: false
};

const mutations = {
    'SWITCH_SHOW_NAV' () {
        state.show = !state.show;
    },
    'HIDE' () {
        state.show = false;
    }
};

const actions = {
    switchShowNav: ({ commit }) => {
        commit('SWITCH_SHOW_NAV');
    },
    hide: ({ commit }) => {
        commit('HIDE');
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