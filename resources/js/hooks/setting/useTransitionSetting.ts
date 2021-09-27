import type { TransitionSetting } from '/#/config';

import { computed } from 'vue';
import { useStore } from 'vuex';

export function useTransitionSetting() {
  const store = useStore();
  const getEnableTransition = computed(() => store.getters['app/getTransitionSetting']?.enable);
  const getOpenNProgress = computed(() => store.getters['app/getTransitionSetting']?.openNProgress);
  const getOpenPageLoading = computed((): boolean => {
    return !!store.getters['app/getTransitionSetting']?.openPageLoading;
  });
  const getBasicTransition = computed(() => store.getters['getTransitionSetting']?.basicTransition);
  function setTransitionSetting(transitionSetting: Partial<TransitionSetting>) {
    store.commit('app/SET_PROJECT_CONFIG', { transitionSetting });
  }
  return {
    setTransitionSetting,
    getEnableTransition,
    getOpenNProgress,
    getOpenPageLoading,
    getBasicTransition,
  };
}
