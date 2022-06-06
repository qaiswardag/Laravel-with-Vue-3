export default {
    namespaced: true,

    // state
    state: {
        companies: null
        // companies: [
        //     {
        //         name: 'apple'
        //     },
        //     {
        //         name: 'google'
        //     }
        // ]
    },

    // getters
    getters: {
        getCompanies(state) {
            return state.companies
        }
    },

    // mutations
    mutations: {},

    // actions
    actions: {},
};
