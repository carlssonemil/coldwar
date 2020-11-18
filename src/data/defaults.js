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

export { ultraProgress, aetherProgress, defaultFilters }