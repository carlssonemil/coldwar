import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['1911', 'Magnum', 'Diamatti']
const required = ['1911', 'Magnum', 'Diamatti']

export default weapons.map(weapon => ({
  category: 'Pistol',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));