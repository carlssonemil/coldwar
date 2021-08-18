import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['1911', 'Magnum', 'Diamatti', 'AMP63', 'Marshal']
const original = ['1911', 'Magnum', 'Diamatti']

export default weapons.map(weapon => ({
  category: 'Pistols',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));