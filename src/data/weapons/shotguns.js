import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Hauer 77', 'Gallo SA12', 'Streetsweeper']
const original = ['Hauer 77', 'Gallo SA12']

export default weapons.map(weapon => ({
  category: 'Shotgun',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));