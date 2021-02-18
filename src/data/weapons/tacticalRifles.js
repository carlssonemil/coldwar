import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Type 63', 'M16', 'AUG', 'DMR 14']
const original = ['Type 63', 'M16', 'AUG', 'DMR 14']

export default weapons.map(weapon => ({
  category: 'Tactical Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));