import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['M79', 'R1 Shadowhunter', 'Ballistic Knife']
const original = ['M79']

export default weapons.map(weapon => ({
  category: 'Special',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));