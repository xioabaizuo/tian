import {createRouter,createWebHashHistory} from 'vue-router'
import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
import Shou from './components/Page/ShouYe.vue'
import FeLie from './components/Page/FeLie.vue'
import WenJian from './components/Page/WenJian.vue'
import Settings from './components/Page/MySettings.vue'
import User from './components/Page/MyUsers.vue'
import Yanse from './components/subassembly/MyYanse.vue'
import Odd from './components/subassembly/MyOdd.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:Login},
        {path:'/home',component:Home,redirect:'/home/shou',
        children:[
            {path:'shou',component:Shou},
            {path:'felie',component:FeLie},
            {path:'wen',component:WenJian},
            {path:'set',component:Settings},
            {path:'user',component:User,redirect:'/home/user/odd',children:[
            {path:'yanse',component:Yanse},
            {path:'odd',component:Odd}
        ]},
        ]
    }
    ]
})
router.beforeEach((to,from,next)=>{
    if (to.path==='/login') return next()
    const token = localStorage.getItem('token')
    if (!token) {
        return next('/login')
    }
    next()
})
export default router