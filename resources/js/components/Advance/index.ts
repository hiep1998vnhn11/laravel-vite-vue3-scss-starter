import { withInstall } from '../install'

import clock from './src/Clock.vue'
import toggleDarkMode from './src/Toggle.vue'

export const Clock = withInstall(clock)
export const ToggleDarkMode = withInstall(toggleDarkMode)
