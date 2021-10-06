import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['Knife', 'Sledgehammer', 'Wakizashi', 'E-Tool', 'Machete', 'Baseball Bat', 'Mace', 'Cane', 'Sai', 'Battle Axe', /*'Hammer and Sickle'*/]
const original = ['Knife']

export default weapons.map(weapon => ({
  category: 'Melee',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));