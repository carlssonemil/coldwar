module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/abstracts/_variables.scss";`
      }
    }
  }
}