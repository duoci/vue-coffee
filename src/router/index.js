import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Main',
        component: () =>   {
            return import ('../views/Main.vue')
        },
        children: [{
                path: 'home',
                alias: '',
                name: 'Home',
                component: () => {
                    return import ('../views/Home.vue')
                },
            },
            {
                path: 'menu',
                name: 'Menu',
                component: () => {
                    return   import ('../views/Menu.vue')
                }
            },
            {
                path: 'shopbag',
                name: 'Shopbag',
                component: () => {
                    return import ('../views/Shopbag.vue')
                }
            },
            {
                path: 'my',
                name: 'My',
                component: () => {
                    return import ('../views/My.vue')
                }
            }
        ]
    },
    {
        path: '/detail/:pid',
        name: 'Detail',
        component: () => {
            return import ('../views/Detail.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => {
            return  import ('../views/Login.vue')
        }
    },
    {
        path: '/orderbuy',
        name: 'OrderBuy',
        component: () => {
            return import ('../views/OrderBuy.vue')
        }

    },
    {
        path: '/address',
        name: 'Address',
        component: () => {
           return import ('../views/Address.vue')
        }
    },
    {
        path: '/order',
        name: 'Order',
        component: () => {
            return import ('../views/Order.vue')
        }
    },
    {
        path: '/myaddress',
        name: 'MyAddress',
        component: () => {
            return import ('../views/MyAddress.vue')
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: () => {
            return  import ('../views/Account.vue')
        }
    },
    {
        path: '/like',
        name: 'Like',
        component: () => {
            return  import ('../views/Like.vue')
        }
    },
    {
        path: '/secure',
        name: 'Secure',
        component: () => {
            return import ('../views/Secure.vue')
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: () => {
            return import ('../views/Search.vue')
        }
    },
    {
        path: '/coffeewallet',
        name: 'Coffeewallet',
        component: () => {
            return import ('../views/Coffeewallet.vue')
        }
    },
    {
        path: '/giftcard',
        name: 'Giftcard',
        component: () => {
            return import ('../views/Giftcard.vue')
        }
    },
    {
        path: '/discounts',
        name: 'Discounts',
        component: () => {
            return import ('../views/Discounts.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router