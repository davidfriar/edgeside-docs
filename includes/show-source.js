const showSource = () => {
  const resultsElements = Array.from(
    document.getElementsByClassName('results-container'),
  )
  const sourceElements = Array.from(
    document.getElementsByClassName('live-results-source'),
  )
  const zip = (a, b) => a.map((e, i) => [e, b[i]])

  zip(resultsElements, sourceElements).forEach(
    ([resultElement, sourceElement]) => {
      let toHighlight = resultElement.innerHTML
      if(resultElement.tagName == "IFRAME") {
        console.log("found IFRAME")
        console.log(resultElement.contentWindow.document)
        console.log(resultElement.contentWindow.document.body)
        console.log(resultElement.contentWindow.document.body.innerHTML)
        toHighlight= resultElement.contentWindow.document.body.innerHTML
      }
      const highlighted = Prism.highlight(
        toHighlight,
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
