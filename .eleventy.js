const modern = require('eleventy-plugin-modern')
module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(modern())

  eleventyConfig.addPassthroughCopy("./content/images");

  return {
    dir: {
      input: 'content',
      output: '_site'
    }
  }
}
