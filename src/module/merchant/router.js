import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'manage',
            component: resolve => require(['./pages/common/manage'], resolve),
        },
        {
            path: '/login', //登录
            name: 'login',
            meta: {
                title: '商户登陆中心',
                routeAuth: false
            },
            component: resolve => require(['./pages/login/index'], resolve),
            display: 0,
        },
    ]
})

