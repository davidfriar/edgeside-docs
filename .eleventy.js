const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter('excludeTag', (collection, tag) => {
    if (!tag) {
      return collection
    } else {
      return collection.filter((item) => !item.data.tags.includes(tag))
    }
  })

  eleventyConfig.addFilter('includeTag', (collection, tag) => {
    if (!tag) {
      return collection
    } else {
      return collection.filter((item) => item.data.tags.includes(tag))
    }
  })

  return {
    dir: {
      input: 'content',
      output: 'target',
      includes: '../includes',
      layouts: '../layouts',
      data: '../data',
    },
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
