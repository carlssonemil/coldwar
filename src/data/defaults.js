// String constants
const ultraStrings = {
  spray: { id: 'Spray', name: 'Spray - Prosper' },
  stripes: { id: 'Stripes', name: 'Stripes - Bengal' },
  classic: { id: 'Classic', name: 'Classic - Ransom' },
  geometric: { id: 'Geometric', name: 'Geometric - Bloodline' },
  flora: { id: 'Flora', name: 'Flora - Cherry Blossom' },
  science: { id: 'Science', name: 'Science - Policia' },
  psychadelic: { id: 'Psychadelic', name: 'Psychadelic - Bliss' },
}

const aetherStrings = {
  grunge: { id: 'Grunge', name: 'Grunge - Rotten' },
  liquid: { id: 'Liquid', name: 'Liquid - Banished' },
  brushstroke: { id: 'Brushstroke', name: 'Brushstroke - Chemical' },
  vintage: { id: 'Vintage', name: 'Vintage - Maniac' },
  fauna: { id: 'Fauna', name: 'Fauna - Rising Tiger' },
  topography: { id: 'Topography', name: 'Topography - Sunder' },
  infection: { id: 'Infection', name: 'Infection - Conviction' },
}

// Default progress for DM Ultra
const ultraProgress = {
  [ultraStrings.spray.id]: false,
  [ultraStrings.stripes.id]: false,
  [ultraStrings.classic.id]: false,
  [ultraStrings.geometric.id]: false,
  [ultraStrings.flora.id]: false,
  [ultraStrings.science.id]: false,
  [ultraStrings.psychadelic.id]: false
}

// Default progress for Dark Aether
const aetherProgress = {
  [aetherStrings.grunge.id]: false,
  [aetherStrings.liquid.id]: false,
  [aetherStrings.brushstroke.id]: false,
  [aetherStrings.vintage.id]: false,
  [aetherStrings.fauna.id]: false,
  [aetherStrings.topography.id]: false,
  [aetherStrings.infection.id]: false
}

console.log(aetherProgress);
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

export { ultraProgress, aetherProgress, defaultFilters, ultraStrings, aetherStrings }