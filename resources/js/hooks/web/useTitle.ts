import { watch, unref } from 'vue'
import { useTitle as usePageTitle } from '@vueuse/core'
import { useGlobSetting } from '/@/hooks/setting'
import { useRouter } from 'vue-router'
export function useTitle() {
  const { title } = useGlobSetting()
  const { currentRoute } = useRouter()

  const pageTitle = usePageTitle()

  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      const tTitle = route?.meta?.title as string
      pageTitle.value = tTitle ? ` ${tTitle} - ${title} ` : `${title}`
    },
    { immediate: true }
  )
}
