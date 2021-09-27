import type { MenuSetting } from '/#/config'

import { computed, unref, ref } from 'vue'

import { useStore } from 'vuex'

import { SIDE_BAR_MINI_WIDTH, SIDE_BAR_SHOW_TIT_MINI_WIDTH } from '/@/enums/appEnum'
import { MenuModeEnum, MenuTypeEnum, TriggerEnum } from '/@/enums/menuEnum'
import { useFullContent } from '/@/hooks/web/useFullContent'

const mixSideHasChildren = ref(false)

export function useMenuSetting() {
  const store = useStore()
  const { getFullContent: fullContent } = useFullContent()
  const getShowSidebar = computed(() => {
    return (
      unref(getSplit) ||
      (unref(getShowMenu) && unref(getMenuMode) !== MenuModeEnum.HORIZONTAL && !unref(fullContent))
    )
  })

  const getCollapsed = computed(() => store.getters['app/getMenuSetting'].collapsed)

  const getMenuType = computed(() => store.getters['app/getMenuSetting'].type)

  const getMenuMode = computed(() => store.getters['app/getMenuSetting'].mode)

  const getMenuFixed = computed(() => store.getters['app/getMenuSetting'].fixed)

  const getShowMenu = computed(() => store.getters['app/getMenuSetting'].show)

  const getMenuHidden = computed(() => store.getters['app/getMenuSetting'].hidden)

  const getMenuWidth = computed(() => store.getters['app/getMenuSetting'].menuWidth)

  const getTrigger = computed(() => store.getters['app/getMenuSetting'].trigger)

  const getMenuTheme = computed(() => store.getters['app/getMenuSetting'].theme)

  const getSplit = computed(() => store.getters['app/getMenuSetting'].split)

  const getMenuBgColor = computed(() => store.getters['app/getMenuSetting'].bgColor)

  const getMixSideTrigger = computed(() => store.getters['app/getMenuSetting'].mixSideTrigger)

  const getCanDrag = computed(() => store.getters['app/getMenuSetting'].canDrag)

  const getAccordion = computed(() => store.getters['app/getMenuSetting'].accordion)

  const getMixSideFixed = computed(() => store.getters['app/getMenuSetting'].mixSideFixed)

  const getTopMenuAlign = computed(() => store.getters['app/getMenuSetting'].topMenuAlign)

  const getCloseMixSidebarOnChange = computed(
    () => store.getters['app/getMenuSetting'].closeMixSidebarOnChange
  )

  const getIsSidebarType = computed(() => unref(getMenuType) === MenuTypeEnum.SIDEBAR)

  const getIsTopMenu = computed(() => unref(getMenuType) === MenuTypeEnum.TOP_MENU)

  const getCollapsedShowTitle = computed(
    () => store.getters['app/getMenuSetting'].collapsedShowTitle
  )

  const getShowTopMenu = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.HORIZONTAL || unref(getSplit)
  })

  const getShowHeaderTrigger = computed(() => {
    if (
      unref(getMenuType) === MenuTypeEnum.TOP_MENU ||
      !unref(getShowMenu) ||
      unref(getMenuHidden)
    ) {
      return false
    }

    return unref(getTrigger) === TriggerEnum.HEADER
  })

  const getIsHorizontal = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.HORIZONTAL
  })

  const getIsMixSidebar = computed(() => {
    return unref(getMenuType) === MenuTypeEnum.MIX_SIDEBAR
  })

  const getIsMixMode = computed(() => {
    return unref(getMenuMode) === MenuModeEnum.INLINE && unref(getMenuType) === MenuTypeEnum.MIX
  })

  const getRealWidth = computed(() => {
    if (unref(getIsMixSidebar)) {
      return unref(getCollapsed) && !unref(getMixSideFixed)
        ? unref(getMiniWidthNumber)
        : unref(getMenuWidth)
    }
    return unref(getCollapsed) ? unref(getMiniWidthNumber) : unref(getMenuWidth)
  })

  const getMiniWidthNumber = computed(() => {
    const { collapsedShowTitle } = store.getters['app/getMenuSetting']
    return collapsedShowTitle ? SIDE_BAR_SHOW_TIT_MINI_WIDTH : SIDE_BAR_MINI_WIDTH
  })

  const getCalcContentWidth = computed(() => {
    const width =
      unref(getIsTopMenu) || !unref(getShowMenu) || (unref(getSplit) && unref(getMenuHidden))
        ? 0
        : unref(getIsMixSidebar)
        ? (unref(getCollapsed) ? SIDE_BAR_MINI_WIDTH : SIDE_BAR_SHOW_TIT_MINI_WIDTH) +
          (unref(getMixSideFixed) && unref(mixSideHasChildren) ? unref(getRealWidth) : 0)
        : unref(getRealWidth)

    return `calc(100% - ${unref(width)}px)`
  })

  // Set menu configuration
  function setMenuSetting(menuSetting: Partial<MenuSetting>): void {
    store.commit('app/SET_PROJECT_CONFIG', { menuSetting })
  }

  function toggleCollapsed() {
    setMenuSetting({
      collapsed: !unref(getCollapsed),
    })
  }
  return {
    setMenuSetting,
    toggleCollapsed,
    getMenuFixed,
    getRealWidth,
    getMenuType,
    getMenuMode,
    getShowMenu,
    getCollapsed,
    getMiniWidthNumber,
    getCalcContentWidth,
    getMenuWidth,
    getTrigger,
    getSplit,
    getMenuTheme,
    getCanDrag,
    getCollapsedShowTitle,
    getIsHorizontal,
    getIsSidebarType,
    getAccordion,
    getShowTopMenu,
    getShowHeaderTrigger,
    getTopMenuAlign,
    getMenuHidden,
    getIsTopMenu,
    getMenuBgColor,
    getShowSidebar,
    getIsMixMode,
    getIsMixSidebar,
    getCloseMixSidebarOnChange,
    getMixSideTrigger,
    getMixSideFixed,
    mixSideHasChildren,
  }
}
