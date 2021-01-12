import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['AK-47', 'FFAR 1', 'Krig 6', 'QBZ-83', 'XM4', 'Groza']
const original = ['AK-47', 'FFAR 1', 'Krig 6', 'QBZ-83', 'XM4']

export default weapons.map(weapon => ({
  category: 'Assault Rifle',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));
