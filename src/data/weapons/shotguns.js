import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Hauer 77', 'Gallo SA12']
const required = ['Hauer 77', 'Gallo SA12']

export default weapons.map(weapon => ({
  category: 'Shotgun',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));