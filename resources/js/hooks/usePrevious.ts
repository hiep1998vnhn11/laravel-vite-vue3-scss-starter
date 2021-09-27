import { ref, watchEffect } from "vue";

export default function usePrevious(value: any) {
  const currentValue = ref<any>(value.value);
  const previousValue = ref<any>();
  // watchEffect(() => {
  //   if (previousValue.value !== value) {
  //     console.log(123);
  //     previousValue.value = currentValue.value;
  //     currentValue.value = value.value;
  //   }
  // });
  if (currentValue.value !== value.value) {
    previousValue.value = currentValue.value;
    currentValue.value = value.value;
  }
  return previousValue;
}
