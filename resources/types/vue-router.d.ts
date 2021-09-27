import { RoleEnum } from '/@/enums/roleEnum'
export {}

declare module 'vue-router' {
    interface RouteMeta extends Record<string | number | symbol, unknown> {
        orderNo?: number
        title: string
        ignoreAuth?: boolean
        roles?: RoleEnum[]
        ignoreKeepAlive?: boolean
        affix?: boolean
        icon?: string
        frameSrc?: string
        transitionName?: string
        hideBreadcrumb?: boolean
        hideChildrenInMenu?: boolean
        carryParam?: boolean
        single?: boolean
        currentActiveMenu?: string
        hideTab?: boolean
        hideMenu?: boolean
        isLink?: boolean
        ignoreRoute?: boolean
        hidePathForChildren?: boolean
    }
}
