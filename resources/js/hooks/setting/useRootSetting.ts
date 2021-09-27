import type { ProjectConfig } from '/#/config';

import { computed } from 'vue';

import { useStore } from 'vuex';
import { ContentEnum, ThemeEnum } from '/@/enums/appEnum';

type RootSetting = Omit<
  ProjectConfig,
  'locale' | 'headerSetting' | 'menuSetting' | 'multiTabsSetting'
>;

export function useRootSetting() {
  const store = useStore();
  const getPageLoading = computed(() => store.getters['app/getPageLoading']);

  const getOpenKeepAlive = computed(() => store.getters['app/getProjectConfig'].openKeepAlive);

  const getSettingButtonPosition = computed(
    () => store.getters['app/getProjectConfig'].settingButtonPosition
  );

  const getCanEmbedIFramePage = computed(
    () => store.getters['app/getProjectConfig'].canEmbedIFramePage
  );

  const getPermissionMode = computed(() => store.getters['app/getProjectConfig'].permissionMode);

  const getShowLogo = computed(() => store.getters['app/getProjectConfig'].showLogo);

  const getContentMode = computed(() => store.getters['app/getProjectConfig'].contentMode);

  const getUseOpenBackTop = computed(() => store.getters['app/getProjectConfig'].useOpenBackTop);

  const getShowSettingButton = computed(
    () => store.getters['app/getProjectConfig'].showSettingButton
  );

  const getUseErrorHandle = computed(() => store.getters['app/getProjectConfig'].useErrorHandle);

  const getShowFooter = computed(() => store.getters['app/getProjectConfig'].showFooter);

  const getShowBreadCrumb = computed(() => store.getters['app/getProjectConfig'].showBreadCrumb);

  const getThemeColor = computed(() => store.getters['app/getProjectConfig'].themeColor);

  const getShowBreadCrumbIcon = computed(
    () => store.getters['app/getProjectConfig'].showBreadCrumbIcon
  );

  const getFullContent = computed(() => store.getters['app/getProjectConfig'].fullContent);

  const getColorWeak = computed(() => store.getters['app/getProjectConfig'].colorWeak);

  const getGrayMode = computed(() => store.getters['app/getProjectConfig'].grayMode);

  const getLockTime = computed(() => store.getters['app/getProjectConfig'].lockTime);

  const getShowDarkModeToggle = computed(
    () => store.getters['app/getProjectConfig'].showDarkModeToggle
  );

  const getDarkMode = computed(() => store.getters['app/getDarkMode']);

  const getLayoutContentMode = computed(() =>
    store.getters['app/getProjectConfig'].contentMode === ContentEnum.FULL
      ? ContentEnum.FULL
      : ContentEnum.FIXED
  );

  function setRootSetting(setting: Partial<RootSetting>) {
    store.commit('app/SET_PROJECT_CONFIG', setting);
  }

  function setDarkMode(mode: ThemeEnum) {
    store.commit('app/SET_DARK_MODE', mode);
  }
  return {
    setRootSetting,

    getSettingButtonPosition,
    getFullContent,
    getColorWeak,
    getGrayMode,
    getLayoutContentMode,
    getPageLoading,
    getOpenKeepAlive,
    getCanEmbedIFramePage,
    getPermissionMode,
    getShowLogo,
    getUseErrorHandle,
    getShowBreadCrumb,
    getShowBreadCrumbIcon,
    getUseOpenBackTop,
    getShowSettingButton,
    getShowFooter,
    getContentMode,
    getLockTime,
    getThemeColor,
    getDarkMode,
    setDarkMode,
    getShowDarkModeToggle,
  };
}
