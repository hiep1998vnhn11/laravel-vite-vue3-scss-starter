import type { RouteRecordRaw } from 'vue-router'
import { store } from '/@/store'
import { useTabs } from './useTabs'
import router from '/@/router'
import projectSetting from '/@/settings/projectSetting'
import { PermissionModeEnum } from '/@/enums/appEnum'
import { RoleEnum } from '/@/enums/roleEnum'
import { intersection } from 'lodash-es'
import { isArray } from '/@/utils/is'

export function usePermission() {
  const { closeAll } = useTabs(router)
  async function togglePermissionMode() {
    store.commit('app/SET_PROJECT_CONFIG', {
      permissionMode:
        projectSetting.permissionMode === PermissionModeEnum.BACK
          ? PermissionModeEnum.ROUTE_MAPPING
          : PermissionModeEnum.BACK,
    })
    location.reload()
  }

  async function resume() {
    store.commit('multipleTab/CLEAR_CACHE_TAB')
    const routes = await store.dispatch('permission/buildRoutesAction')
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })
    store.commit('permission/SET_BUILD_TIME')
    closeAll()
  }

  function hasPermission(value?: RoleEnum | RoleEnum[] | string | string[], def = true): boolean {
    if (!value) {
      return def
    }

    const permMode = projectSetting.permissionMode

    if ([PermissionModeEnum.ROUTE_MAPPING, PermissionModeEnum.ROLE].includes(permMode)) {
      if (!isArray(value)) {
        return store.getters['user/getRoleList']?.includes(value as RoleEnum)
      }
      return (intersection(value, store.getters['user/getRoleList']) as RoleEnum[]).length > 0
    }

    if (PermissionModeEnum.BACK === permMode) {
      const allCodeList = store.getters['permission/getPermCodeList'] as string[]
      if (!isArray(value)) {
        return allCodeList.includes(value)
      }
      return (intersection(value, allCodeList) as string[]).length > 0
    }
    return true
  }

  async function changeRole(roles: RoleEnum | RoleEnum[]): Promise<void> {
    if (projectSetting.permissionMode !== PermissionModeEnum.ROUTE_MAPPING) {
      throw new Error(
        'Please switch PermissionModeEnum to ROUTE_MAPPING mode in the configuration to operate!'
      )
    }

    if (!isArray(roles)) {
      roles = [roles]
    }
    store.dispatch('user/setRoleList', roles)
    await resume()
  }

  async function refreshMenu() {
    resume()
  }

  return { changeRole, hasPermission, togglePermissionMode, refreshMenu }
}
