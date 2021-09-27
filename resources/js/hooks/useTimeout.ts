import { ref, watch, computed } from "vue";

export default function useTimeout(
  callback: (...arg: any[]) => any,
  delay: number
) {
  const callbackRef = ref<any>(callback);
  const timeoutRef = ref<any>(null);

  watch(
    () => callback,
    () => {
      callbackRef.value = callback;
    }
  );

  const timeout = computed(() => setTimeout(() => callbackRef.value(), delay));
}
