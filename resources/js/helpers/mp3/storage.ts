const PREFIX = import.meta.env.VITE_GLOB_APP_SHORT_NAME + '_MP3_'

export function saveObject(key: string, val: any): void {
    localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(val))
}

export function getObject(key: string): any {
    const data = localStorage.getItem(`${PREFIX}${key}`)
    if (data === null) return false
    try {
        return JSON.parse(data) || false
    } catch {
        return false
    }
}
