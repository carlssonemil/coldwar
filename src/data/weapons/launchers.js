import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Cigma 2', 'RPG-7']
const original = ['Cigma 2', 'RPG-7']

export default weapons.map(weapon => ({
  category: 'Launchers',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));