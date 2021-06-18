import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['MP5', 'Milano 821', 'AK-74u', 'KSP 45', 'Bullfrog', 'MAC-10', 'LC10', 'PPSh-41', /*'OTs 9'*/]
const original = ['MP5', 'Milano 821', 'AK-74u', 'KSP 45', 'Bullfrog']

export default weapons.map(weapon => ({
  category: 'Submachine Guns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));
