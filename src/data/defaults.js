const camoStrings = {
  'Spray': 'Spray: Prosper',
  'Stripes': 'Stripes: Bengal',
  'Classic': 'Classic: Ransom',
  'Geometric': 'Geometric: Bloodline',
  'Flora': 'Flora: Cherry Blossom',
  'Science': 'Science: Policia',
  'Psychadelic': 'Psychadelic: Bliss',

  'Grunge': 'Grunge: Rotten',
  'Liquid': 'Liquid: Banished',
  'Brushstroke': 'Brushstroke: Chemical',
  'Vintage': 'Vintage: Maniac',
  'Fauna': 'Fauna: Rising Tiger',
  'Topography': 'Topography: Sunder',
  'Infection': 'Infection: Conviction',
}

// Default progress for DM Ultra
const ultraProgress = {
  'Spray': false,
  'Stripes': false,
  'Classic': false,
  'Geometric': false,
  'Flora': false,
  'Science': false,
  'Psychadelic': false
}

// Default progress for Dark Aether
const aetherProgress = {
  'Grunge': false,
  'Liquid': false,
  'Brushstroke': false,
  'Vintage': false,
  'Fauna': false,
  'Topography': false,
  'Infection': false
}

// Default filters
const defaultFilters = {
  aether: {
    category: null,
    hideNonRequired: false,
    hideCompleted: false
  },

  ultra: {
    category: null,
    hideNonRequired: false,
    hideCompleted: false
  }
}

export { ultraProgress, aetherProgress, defaultFilters, camoStrings }