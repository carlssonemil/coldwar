import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Cigma 2', 'RPG-7']
const required = ['Cigma 2', 'RPG-7']

export default weapons.map(weapon => ({
  category: 'Launcher',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));