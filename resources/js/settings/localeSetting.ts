import type { DropMenu } from '../components/Dropdown'
import type { LocaleSetting, LocaleType } from '/#/config'

export const LOCALE: { [key: string]: LocaleType } = {
    VI_VN: 'vi',
    EN_US: 'en',
}

export const localeSetting: LocaleSetting = {
    showPicker: true,
    locale: LOCALE.VI_VN,
    fallback: LOCALE.VI_VN,
    availableLocales: [LOCALE.VI_VN, LOCALE.EN_US],
}

// locale list
export const localeList: DropMenu[] = [
    {
        text: 'Tiếng Việt',
        event: LOCALE.VI_VN,
    },
    {
        text: 'English',
        event: LOCALE.EN_US,
    },
]
