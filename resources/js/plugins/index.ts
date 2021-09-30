import type { App } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import VueTippy from 'vue-tippy'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export const setupPlugin = (app: App) => {
    app.use(PerfectScrollbar)
    app.use(VueTippy)
}
