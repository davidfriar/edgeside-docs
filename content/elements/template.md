---
title: Template
tags: template
order: 1
element:
  attributes:
    - name: data-edgeside-key
      description: specifies a key under which the template processor can expect to find  the data it needs to populate the template.
      required: true
  content: A template written in the [Mustache](https://mustache.github.io/mustache.5.html) templating language.
---
The template element is used to render a fragment of the page a site visitor sees in the browser, which may contain dynamic data. It can consume data from the 'context' when it is processed on the edge (which might come from a call  to some external service, for example), and use this data as input to be rendered using its template.
