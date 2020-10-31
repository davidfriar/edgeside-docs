const showSource = () => {
  const resultsElements = Array.from(
    document.getElementsByClassName('live-results'),
  )
  const sourceElements = Array.from(
    document.getElementsByClassName('live-results-source'),
  )
  const zip = (a, b) => a.map((e, i) => [e, b[i]])

  zip(resultsElements, sourceElements).forEach(
    ([resultElement, sourceElement]) => {
      console.log('resultElement:', resultElement.innerHTML)
      console.log('sourceElement:', sourceElement.innerHTML)
      const highlighted = Prism.highlight(
        resultElement.innerHTML,
        Prism.languages.html,
        'html',
      )
      console.log('hightlighted:', highlighted)
      sourceElement.innerHTML = highlighted
    },
  )
}

Prism.manual = true

document.addEventListener('DOMContentLoaded', function () {
  showSource()
})
