import type { App } from 'vue'
import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// import user from "./modules/user";
// import app from "./modules/app";
// import errorLog from "./modules/errorLog";
// import locale from "./modules/locale";
// import lock from "./modules/lock";
// import multipleTab from "./modules/multipleTab";
// import permission from "./modules/permission";

const store = createStore<any>({
    state,
    mutations,
    actions,
    modules: {},
})

export function setupStore(app: App<Element>) {
    app.use(store)
}

export { store }
