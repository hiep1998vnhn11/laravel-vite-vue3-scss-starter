import type { HeaderSetting } from '/#/config'
import { computed, unref } from 'vue'
import { useStore } from 'vuex'
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting'
import { useRootSetting } from '/@/hooks/setting/useRootSetting'
import { useFullContent } from '/@/hooks/web/useFullContent'
import { MenuModeEnum } from '/@/enums/menuEnum'

export function useHeaderSetting() {
  const { getFullContent } = useFullContent()
  const store = useStore()

  const getShowFullHeaderRef = computed(() => {
    return (
      !unref(getFullContent) &&
      unref(getShowMixHeaderRef) &&
      unref(getShowHeader) &&
      !unref(getIsTopMenu) &&
      !unref(getIsMixSidebar)
    )
  })

  const getUnFixedAndFull = computed(() => !unref(getFixed) && !unref(getShowFullHeaderRef))

  const getShowInsetHeaderRef = computed(() => {
    const need = !unref(getFullContent) && unref(getShowHeader)
    return (
      (need && !unref(getShowMixHeaderRef)) ||
      (need && unref(getIsTopMenu)) ||
      (need && unref(getIsMixSidebar))
    )
  })

  const {
    getMenuMode,
    getSplit,
    getShowHeaderTrigger,
    getIsSidebarType,
    getIsMixSidebar,
    getIsTopMenu,
  } = useMenuSetting()
  const { getShowBreadCrumb, getShowLogo } = useRootSetting()

  const getShowMixHeaderRef = computed(() => !unref(getIsSidebarType) && unref(getShowHeader))

  const getShowDoc = computed(() => store.getters['app/getHeaderSetting'].showDoc)

  const getHeaderTheme = computed(() => store.getters['app/getHeaderSetting'].theme)

  const getShowHeader = computed(() => store.getters['app/getHeaderSetting'].show)

  const getFixed = computed(() => store.getters['app/getHeaderSetting'].fixed)

  const getHeaderBgColor = computed(() => store.getters['app/getHeaderSetting'].bgColor)

  const getShowSearch = computed(() => store.getters['app/getHeaderSetting'].showSearch)

  const getUseLockPage = computed(() => store.getters['app/getHeaderSetting'].useLockPage)

  const getShowFullScreen = computed(() => store.getters['app/getHeaderSetting'].showFullScreen)

  const getShowNotice = computed(() => store.getters['app/getHeaderSetting'].showNotice)

  const getShowBread = computed(() => {
    return (
      unref(getMenuMode) !== MenuModeEnum.HORIZONTAL && unref(getShowBreadCrumb) && !unref(getSplit)
    )
  })

  const getShowHeaderLogo = computed(() => {
    return unref(getShowLogo) && !unref(getIsSidebarType) && !unref(getIsMixSidebar)
  })

  const getShowContent = computed(() => {
    return unref(getShowBread) || unref(getShowHeaderTrigger)
  })

  // Set header configuration
  function setHeaderSetting(headerSetting: Partial<HeaderSetting>) {
    store.commit('app/SET_PROJECT_CONFIG', { headerSetting })
  }
  return {
    setHeaderSetting,

    getShowDoc,
    getShowSearch,
    getHeaderTheme,
    getUseLockPage,
    getShowFullScreen,
    getShowNotice,
    getShowBread,
    getShowContent,
    getShowHeaderLogo,
    getShowHeader,
    getFixed,
    getShowMixHeaderRef,
    getShowFullHeaderRef,
    getShowInsetHeaderRef,
    getUnFixedAndFull,
    getHeaderBgColor,
  }
}
