const showSourceForLiveResults = () => {
  const resultsElements = Array.from(
    document.getElementsByClassName('live-results'),
  )
  const sourceElements = Array.from(
    document.getElementsByClassName('live-results-source'),
  )
  const zip = (a, b) => a.map((e, i) => [e, b[i]])

  zip(resultsElements, sourceElements).forEach(
    ([resultElement, sourceElement]) => {
      showSource(resultElement, sourceElement)
    },
  )
}

const showFrameSource = (frameElement, sourceElementId) => {
  element = frameElement.contentWindow.document.getElementsByClassName('live-results').item(0)
  sourceElement = document.getElementById(sourceElementId)
  showSource(element, sourceElement)
}

const showSource = (element,  sourceElement) => {
  const highlighted = Prism.highlight(
    element.innerHTML,
    Prism.languages.html,
    'html',
  )
  sourceElement.innerHTML = highlighted
}

Prism.manual = true

document.addEventListener('DOMContentLoaded', function () {
  showSourceForLiveResults()
})
