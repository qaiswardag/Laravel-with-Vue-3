import {useAjax} from "../../composables/use-ajax";

export default {
    namespaced: true,

    // state
    state: {
        companies: null

        // end state
    },

    // getters
    getters: {
        getCompanies(state) {
            return state.companies
        }

        // end getters
    },

    // mutations
    mutations: {
        setCompanies(state, payload) {
            state.companies = payload
        }

        // end mutations
    },

    // actions
    actions: {
        // load companies
        async loadCompanies(context) {
            // import ajax
            const {isPending, loadData} = useAjax()

            // try
            try {
                const data = await loadData(
                    `http://127.0.0.1:8000/api`,
                    {},
                    {pending: true, additionalCallTime: 500}
                )

                // context
                context.commit('setCompanies', data)

            } catch (err) {
                throw err;
            }

        }
        // end action
    },
};
