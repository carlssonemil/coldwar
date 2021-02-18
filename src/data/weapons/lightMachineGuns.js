import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Stoner 63', 'RPD', 'M60']
const original = ['Stoner 63', 'RPD', 'M60']

export default weapons.map(weapon => ({
  category: 'Light Machine Guns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));