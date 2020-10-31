module.exports = {
  eleventyNavigation: (data) => {
    if (!data.hideInNav) {
      return { key: data.title, parent: data.parent, order: data.order }
    }
  },
  elementType: (data) => {
    if (!data.tags || !data.tags.includes || !data.tags.includes('element')) {
      return false
    } else {
      return data.tags.find((x) => x !== 'element')
    }
  },
}
