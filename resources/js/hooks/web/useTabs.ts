import type { RouteLocationNormalized, Router } from 'vue-router'
import { useRouter } from 'vue-router'
import { unref } from 'vue'
import { useStore } from 'vuex'
enum TableActionEnum {
  REFRESH,
  CLOSE_ALL,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE_CURRENT,
  CLOSE,
}

export function useTabs(_router?: Router) {
  const store = useStore()
  function canIUseTabs(): boolean {
    const { show } = store.getters['app/getMultiTabsSetting']
    if (!show) {
      throw new Error('The multi-tab page is currently not open, please open it in the settings！')
    }
    return !!show
  }

  const router = _router || useRouter()

  const { currentRoute } = router

  function getCurrentTab() {
    const route = unref(currentRoute)
    return store.getters['multipleTab/getTabList'].find((item) => item.path === route.path)!
  }

  async function updateTabTitle(title: string, tab?: RouteLocationNormalized) {
    const canIUse = canIUseTabs
    if (!canIUse) {
      return
    }
    const targetTab = tab || getCurrentTab()
    await store.commit('multipleTab/SET_TAB_TITLE', { title, route: targetTab })
  }

  async function handleTabAction(action: TableActionEnum, tab?: RouteLocationNormalized) {
    const canIUse = canIUseTabs
    if (!canIUse) {
      return
    }
    const currentTab = getCurrentTab()
    switch (action) {
      case TableActionEnum.REFRESH:
        await store.dispatch('multipleTab/refreshPage', router)
        break

      case TableActionEnum.CLOSE_ALL:
        await store.commit('multipleTab/CLOSE_ALL_TAB', router)
        break

      case TableActionEnum.CLOSE_LEFT:
        await store.dispatch('multipleTab/closeLeftTabs', { tab: currentTab, router })
        break

      case TableActionEnum.CLOSE_RIGHT:
        await store.dispatch('multipleTab/closeRightTabs', { tab: currentTab, router })
        break

      case TableActionEnum.CLOSE_OTHER:
        await store.dispatch('multipleTab/closeOtherTabs', { tab: currentTab, router })
        break

      case TableActionEnum.CLOSE_CURRENT:
      case TableActionEnum.CLOSE:
        await store.dispatch('multipleTab/closeTab', { tab: tab || currentTab, router })
        break
    }
  }

  return {
    refreshPage: () => handleTabAction(TableActionEnum.REFRESH),
    closeAll: () => handleTabAction(TableActionEnum.CLOSE_ALL),
    closeLeft: () => handleTabAction(TableActionEnum.CLOSE_LEFT),
    closeRight: () => handleTabAction(TableActionEnum.CLOSE_RIGHT),
    closeOther: () => handleTabAction(TableActionEnum.CLOSE_OTHER),
    closeCurrent: () => handleTabAction(TableActionEnum.CLOSE_CURRENT),
    close: (tab?: RouteLocationNormalized) => {
      handleTabAction(TableActionEnum.CLOSE, tab)
    },
    setTitle: (title: string, tab?: RouteLocationNormalized) => updateTabTitle(title, tab),
  }
}
