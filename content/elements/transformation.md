---
title: Transformation
tags: transformation
order: 4
element:
  attributes:
    - name: data-edgeside-input
      description: specifies a key under which the transform element can expect to find  the data it needs to transform.
      required: true
    - name: data-edgeside-output
      description: specifies a key under which the template processor will output transformed data
      required: true
  content: A transformation written in the [JSONata](https://docs.jsonata.org/overview.html) transformation language.
---
A Transformation element is both a consumer and a producer of context data. It takes an input and applies a transformation to it to produce an output.
