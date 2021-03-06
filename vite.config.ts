import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { OUTPUT_DIR } from './build/constant'
import pkg from './package.json'
import moment from 'moment'

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    const viteEnv = wrapperEnv(env)
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } =
        viteEnv
    const isBuild = command === 'build'

    return {
        base: VITE_PUBLIC_PATH,
        root,
        resolve: {
            alias: [
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
                },
                {
                    find: /\/@\//,
                    replacement: pathResolve('resources/js') + '/',
                },
                {
                    find: /\/#\//,
                    replacement: pathResolve('resources/types') + '/',
                },
            ],
        },
        server: {
            host: true,
            port: VITE_PORT,
        },
        build: {
            target: 'es2015',
            outDir: OUTPUT_DIR,
            rollupOptions: {
                input: 'resources/js/app.ts',
            },
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    drop_console: VITE_DROP_CONSOLE,
                },
            },
            brotliSize: false,
            chunkSizeWarningLimit: 2000,
            manifest: true,
            emptyOutDir: false,
        },
        define: {
            __INTLIFY_PROD_DEVTOOLS__: false,
            __APP_INFO__: JSON.stringify(__APP_INFO__),
        },
        publicDir: 'public',
        plugins: createVitePlugins(viteEnv, isBuild),

        optimizeDeps: {
            include: ['moment/dist/locale/vi'],
            exclude: ['vue-demi'],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: ` @import '/@/assets/scss/variables'; @import "/@/assets/scss/include-media"; `,
                },
            },
        },
    }
}
