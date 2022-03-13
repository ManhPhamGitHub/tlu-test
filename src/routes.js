
import { createRouter,createWebHistory } from 'vue-router'

import Home from './components/student/Main.vue'
import Infomation from './components/student/Infomation.vue'
import RightSide from './components/student/RightSide.vue'
import Ideal from './components/student/Ideal.vue'
import ResultRegister from './components/student/ResultRegister.vue'
import Register from './components/student/Register.vue'
import Details from './components/teacher/Details.vue'
import HomeTeacher from './components/teacher/HomeTeacher.vue'
import IntroTeacher from './components/teacher/IntroTeacher.vue'
import MainAdmin from './components/admin/Main.vue'
import RightSideAdmin from './components/admin/RightSide.vue'
import Student from './components/admin/Student.vue'


import Login from "@/components/views/Login/Login";
import FormRegister from "@/components/views/FormRegister/FormRegister";
import ThongTinSinhVien from "@/components/views/ThongTinSinhVien/ThongTinSinhVien";
const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: FormRegister,
    },
    {
        path: "/thong-tin-sv",
        name: "ThongTinSv",
        component: ThongTinSinhVien,
    },

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
        redirect:'/teacher/dashboard',
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
    {
        path: '/admin',
        component: MainAdmin,
        redirect:'/admin/dashboard',
        children:[
            {
                path:'/admin/main',
                component:Student 
            },
            {
                path:'/admin/dashboard',
                component: RightSideAdmin
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router