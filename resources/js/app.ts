import "/@/design/index.less";
import "virtual:svg-icons-register";
import App from "./App.vue";
import { createApp } from "vue";
import { setupErrorHandle } from "/@/logics/error-handle";
import { router, setupRouter } from "/@/router";
import { setupRouterGuard } from "/@/router/guard";
import { setupStore } from "/@/store";
import { setupGlobDirectives } from "/@/directives";
import { setupI18n } from "/@/locales/setupI18n";
import { registerGlobComp } from "/@/components/registerGlobComp";
import { initAppConfigStore } from "/@/logics/initAppConfig";
if (import.meta.env.DEV) {
    import("ant-design-vue/dist/antd.less");
}

async function bootstrap() {
    const app = createApp(App);
    // Configure store
    setupStore(app);
    // Initialize internal system configuration
    initAppConfigStore();
    // Register global components
    registerGlobComp(app);
    // Multilingual configuration
    await setupI18n(app);
    // Configure routing
    setupRouter(app);
    // router-guard
    setupRouterGuard(router);
    // Register global directive
    setupGlobDirectives(app);
    // Configure global error handling
    setupErrorHandle(app);
    // Mount when the route is ready
    // https://next.router.vuejs.org/api/#isready
    await router.isReady();
    app.mount("#app", true);
}

void bootstrap();
