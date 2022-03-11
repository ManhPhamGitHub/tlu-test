
import { createRouter,createWebHistory } from 'vue-router'

import Home from './components/Main.vue'
import Infomation from './components/Infomation.vue'
import RightSide from './components/RightSide.vue'
import Ideal from './components/Ideal.vue'
import ResultRegister from './components/ResultRegister.vue'
import Register from './components/Register.vue'
import Details from './components/teacher/Details.vue'
import HomeTeacher from './components/teacher/HomeTeacher.vue'
import IntroTeacher from './components/teacher/IntroTeacher.vue'
const routes = [
    {
        path: '/',
        component: Home,
        redirect:'/student/dashboard',
        children:[
            {
                path:'/student/dashboard',
                component:RightSide
            },
            {
                path:'/student/infomation',
                component:Infomation
            },
            {
                path:'/student/register',
                component:Register
            },
            {
                path:'/student/result-Register',
                component:ResultRegister
            },
            {
                path:'/student/ideal',
                component:Ideal
            }
        ]
    },
    {
        path: '/teacher',
        component: HomeTeacher,
        redirect:'/teacher/main',
        children:[
            {
                path:'/teacher/main',
                component:Details
            },
            {
                path:'/teacher/dashboard',
                component:IntroTeacher
            },
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router