import { withInstall } from '/@/components/install'

import discordContainer from './src/Discord.vue'
import trelloContainer from './src/Trello.vue'
import mp3Container from './src/Mp3.vue'
import authContainer from './src/Auth.vue'

export const DiscordContainer = withInstall(discordContainer)
export const TrelloContainer = withInstall(trelloContainer)
export const Mp3Container = withInstall(mp3Container)
export const AuthContainer = withInstall(authContainer)
