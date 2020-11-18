import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['M79']
const required = ['M79']

export default weapons.map(weapon => ({
  category: 'Special',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));