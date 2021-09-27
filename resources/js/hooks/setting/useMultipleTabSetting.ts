import type { MultiTabsSetting } from '/#/config';

import { computed } from 'vue';

import { useStore } from 'vuex';

export function useMultipleTabSetting() {
  const store = useStore();

  const getShowMultipleTab = computed(() => store.getters['app/getMultiTabsSetting'].show);

  const getShowQuick = computed(() => store.getters['app/getMultiTabsSetting'].showQuick);

  const getShowRedo = computed(() => store.getters['app/getMultiTabsSetting'].showRedo);

  const getShowFold = computed(() => store.getters['app/getMultiTabsSetting'].showFold);

  function setMultipleTabSetting(multiTabsSetting: Partial<MultiTabsSetting>) {
    store.commit('app/SET_PROJECT_CONFIG', { multiTabsSetting });
  }
  return {
    setMultipleTabSetting,
    getShowMultipleTab,
    getShowQuick,
    getShowRedo,
    getShowFold,
  };
}
