import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Cigma 2', 'RPG-7']
const original = ['Cigma 2', 'RPG-7']

export default weapons.map(weapon => ({
  category: 'Launcher',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));