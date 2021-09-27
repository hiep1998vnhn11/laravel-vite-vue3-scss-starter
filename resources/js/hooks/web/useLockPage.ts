import { computed, onUnmounted, unref, watchEffect } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { useStore } from 'vuex'
import { useRootSetting } from '../setting/useRootSetting'

export function useLockPage() {
  const store = useStore()
  const { getLockTime } = useRootSetting()
  let timeId: TimeoutHandle

  function clear(): void {
    window.clearTimeout(timeId)
  }

  function resetCalcLockTimeout(): void {
    if (!store.getters['user/getToken']) {
      clear()
      return
    }
    const lockTime = store.getters['app/getProjectConfig'].lockTime
    if (!lockTime || lockTime < 1) {
      clear()
      return
    }
    clear()

    timeId = setTimeout(() => {
      lockPage()
    }, lockTime * 60 * 1000)
  }

  function lockPage(): void {
    store.commit('lock/SET_LOCK_INFO', {
      isLock: true,
      pwd: undefined,
    })
  }

  watchEffect((onClean) => {
    if (store.getters['user/getToken']) {
      resetCalcLockTimeout()
    } else {
      clear()
    }
    onClean(() => {
      clear()
    })
  })

  onUnmounted(() => {
    clear()
  })

  const keyupFn = useThrottleFn(resetCalcLockTimeout, 2000)

  return computed(() => {
    if (unref(getLockTime)) {
      return { onKeyup: keyupFn, onMousemove: keyupFn }
    } else {
      clear()
      return {}
    }
  })
}
