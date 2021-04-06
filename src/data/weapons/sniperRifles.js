import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Pellington 703', 'LW3-Tundra', 'M82', 'ZRG 20mm']
const original = ['Pellington 703', 'LW3-Tundra', 'M82']

export default weapons.map(weapon => ({
  category: 'Sniper Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));