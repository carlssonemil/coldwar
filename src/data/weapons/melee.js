import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Knife']
const required = ['Knife']

export default weapons.map(weapon => ({
  category: 'Melee',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));