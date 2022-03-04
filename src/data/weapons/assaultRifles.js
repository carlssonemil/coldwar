import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['XM4', 'AK-47', 'Krig 6', 'QBZ-83', 'FFAR 1', 'Groza', 'FARA 83', 'C58', 'EM2', 'Grav', 'Vargo 52']
const original = ['XM4', 'AK-47', 'Krig 6', 'QBZ-83', 'FFAR 1',]

export default weapons.map(weapon => ({
  category: 'Assault Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));
