import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Stoner 63', 'RPD', 'M60']
const required = ['Stoner 63', 'RPD', 'M60']

export default weapons.map(weapon => ({
  category: 'Light Machine Gun',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));