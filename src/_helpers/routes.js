import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';
import PublicView from '@/views/PublicView';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { name: 'Home Page', path: '/', component: HomeView },
        { name: 'Serviços', path: '/servicos', component: PublicView },
        { name: 'Login Page', path: '/login', component: LoginView },
    ]
});

const DEFAULT_TITLE = process.env.VUE_APP_TITLE;
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/publica'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');
    // if (authRequired && !loggedIn) {
    //     return next('/login')
    // }

    Vue.nextTick(() => {
        document.title = DEFAULT_TITLE + ' | ' + to.name || DEFAULT_TITLE;
    });
    next();
});
