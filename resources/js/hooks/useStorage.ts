import { ref, watch } from "vue";

export function useLocalStorage(key: string, defaultValue: any) {
  return useStorage(key, defaultValue, window.localStorage);
}
export function useSessionStorage(key: string, defaultValue: any) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
function useStorage(key: string, defaultValue: any, objectStorage: Storage) {
  const value = ref<any>(
    (() => {
      const jsonValue = objectStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
      objectStorage.setItem(key, JSON.stringify(defaultValue));
      if (typeof defaultValue === "function") return defaultValue();
      return defaultValue;
    })()
  );
  const setValue = (newValue: any) => {
    value.value = newValue;
    objectStorage.setItem(key, JSON.stringify(newValue));
  };
  const remove = () => (value.value = undefined);
  watch(
    () => value,
    () => {
      if (!value) return objectStorage.removeItem(key);
      return objectStorage.setItem(key, JSON.stringify(value.value));
    }
  );
  return [value, setValue, remove];
}
type Storage = {
  getItem: (key: string) => any;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};
