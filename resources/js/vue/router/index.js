import {createRouter, createWebHistory} from 'vue-router'
import Companies from '../components/Companies'

const routes = [
    {
        path: '/',
        name: 'Companies',
        component: Companies
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
