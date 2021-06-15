module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cold-war-tracker/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/abstracts/_variables.scss";`
      }
    }
  }
}