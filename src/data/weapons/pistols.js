import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['1911', 'Magnum', 'Diamatti']
const original = ['1911', 'Magnum', 'Diamatti']

export default weapons.map(weapon => ({
  category: 'Pistol',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));