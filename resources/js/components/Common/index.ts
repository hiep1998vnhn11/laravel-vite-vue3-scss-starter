import { withInstall } from '../install'

import textarea from './src/Textarea.vue'
import card from './src/Card.vue'
import dropdown from './src/Dropdown/src/Dropdown.vue'

export const Textarea = withInstall(textarea)
export const Card = withInstall(card)
export const Dropdown = withInstall(dropdown)
