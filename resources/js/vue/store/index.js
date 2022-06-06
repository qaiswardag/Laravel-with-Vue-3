import {createStore} from 'vuex';
import companies from './modules/companies';

const store = createStore({
    modules: {
        companies: companies,
    },
});

export default store;
