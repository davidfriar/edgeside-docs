---
title: Conditional
tags: conditional
order: 7
element:
  attributes:
    - name: data-edgeside-input
      description: specifies a key under which it should  expect to find data
      required: true
    - name: data-edgeside-expression
      description: a javascript expression which evaluates to a boolean and can refer to any data available under the given key
      required: true
  content: Any arbitrary HTML content, possibly including other edgeside elements.
---
The conditional element is used where we wish to either include or not include some part of a page, depending on a conditional expression which can refer to the element's input data.

The element will evaluate the given expression, on the edge. If the expression evaluates to 'true' the contents of this element will be processed exactly as it would have been if this element were not there. If the expression evaluates to 'false', the contents of the element will be skipped. In this case any HTML content of the element will not be rendered, and any other EdgeSide elements in this content will not be processed.

Expressions are evaluated using a parser based on [JSEP](https://ericsmekens.github.io/jsep/), which supports any valid JavaScript expression, but not statements or blocks of code. The result of an expression is interpreted as a boolean using normal JavaScript behaviour.


