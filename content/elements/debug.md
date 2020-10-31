---
title: Debug
tags: debug
order: 8
element:
  attributes:
    - name: data-edgeside-key
      description: specifies a key under which it should  expect to find data
      required: true
---
The debug element is a convenience for developers. It takes any data it finds under a given key, applies *JSON.stringify()* to it, and renders the results in a 'div' element on the page.
