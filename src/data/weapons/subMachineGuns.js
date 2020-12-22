import { ultraProgress, aetherProgress } from '../defaults'

const weapons = ['AK-74u', 'Bullfrog', 'KSP 45', 'Milano 821', 'MP5', 'MAC-10']
const required = ['AK-74u', 'Bullfrog', 'KSP 45', 'Milano 821', 'MP5']

export default weapons.map(weapon => ({
  category: 'Sub Machine Gun',
  name: weapon,
  required: required.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...ultraProgress }
  }
}));
