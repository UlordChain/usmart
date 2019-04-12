import Vue from 'vue'

import VueRouter from 'vue-router'
import VueMoment from 'vue-moment';
import {Routing} from './Routing';
import {store} from '../store/store'
import * as Actions from '../store/constants'
import {localized} from '../localization/locales'
import * as LANG_KEYS from '../localization/keys'

/***
 * Sets up an instance of Vue.
 * This is shared between the popup.js and prompt.js scripts.
 */
export default class VueInitializer {

    constructor(routes,
                components,
                middleware = () => {},
                routerCallback = () => {}){
        this.setupVuePlugins();
        this.registerComponents(components);
        const router = this.setupRouting(routes, middleware);
                
        store.dispatch(Actions.LOAD_SCATTER).then(() => {//调用 方法初始化数据

            Vue.mixin({
                data(){ return {
                    langKeys:LANG_KEYS
                }},
                methods: {
                    locale:(key) => localized(key, store.getters.language)
                }
            })

            this.setupVue(router);

            routerCallback(router, store);
        });

        return router;
    }

    setupVuePlugins(){
        Vue.use(VueRouter);
        Vue.use(VueMoment);
    }

    registerComponents(components){
        components.map(component => {
            Vue.component(component.tag, component.vue);
        });
    }

    setupRouting(routes, middleware){
        const router = new VueRouter({routes});
        router.beforeEach((to, from, next) => middleware(to, next, store));
        return router;
    }

    setupVue(router){
        const app = new Vue({router, store});
        app.$mount('#scatter');

        // This removes the browser console's ability to
        // gain access to vuex store. ( for instance `scatter.__vue__.$store.state` )
        document.getElementById('scatter').removeAttribute('id')
    }

}