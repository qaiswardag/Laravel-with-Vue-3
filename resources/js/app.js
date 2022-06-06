import './bootstrap';
import {createApp} from 'vue'
import router from './vue/router'
import vuex from './vue/store'


// import vue components
import Companies from './vue/components/Companies'

// create app
createApp({
    components: {
        'companies': Companies,
    }
})
    .use(router)
    .use(vuex)
    .mount('#app')
