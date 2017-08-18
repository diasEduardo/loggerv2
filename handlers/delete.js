import { bot } from '../Logger'
import { log } from '../system/log'
import { r } from '../system/rethinkclient'

function deleteGuildDocument (guildID) {
  return new Promise((resolve, reject) => {
    r.db('Logger').table('Guilds').filter({'guildID': `${guildID}`}).delete().run().then((res) => {
      if (res.deleted) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

export { deleteGuildDocument }
