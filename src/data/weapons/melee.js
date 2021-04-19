import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Knife', 'Sledgehammer', 'Wakizashi', 'E-Tool', 'Machete', 'Ballistic Knife']
const original = ['Knife']

export default weapons.map(weapon => ({
  category: 'Melee',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));