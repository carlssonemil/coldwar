import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['M79']
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