import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Type 63', 'M16', 'AUG', 'DMR 14']
const required = ['Type 63', 'M16', 'AUG', 'DMR 14']

export default weapons.map(weapon => ({
  category: 'Tactical Rifle',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));