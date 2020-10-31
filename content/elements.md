---
title: Elements
order: 2
---
* Elements are the basic building blocks of the EdgeSide framework.
* An element is represented in markup by a script tag with the "type" attribute "edgeside/<elementname>".
* Other attributes of the script tag with names beginning with "data-edgeside-" are used to configure the behaviour of the element.
* An element is processed by an ElementHandler. The worker uses a cloudflare HTMLRewriter and the elementhandlers are configured to fire when the html rewriter sees an html element that matches <script type='edgeside/elementname' .
* Internally the framework uses a "context" object, which is passed to all element handlers.
* Elementhandlers can either produce or consume data (or both).
* Elements can exchange data using a 'key', obtained from the 'data-edgeside-key' attribute.
* A producing element pushes (a Promise of) data into the context object indexed by its 'key'
* A consuming element pulls (a Promise for) data from the context object using its key
* A consuming element can have multiple keys (not yet implemented) represented as a comma separated string in the 'data-edgeside-key' attribute
* An element that both produces and consumes data can have both input key(s) and an output key


Here is a list of the currently available set of elements:

<ul>
{%- for item in collections.element | excludeTag('example')-%}
  <li>{{ item.data.title }}</li>
{%- endfor -%}
</ul>

