---
layout: page
---
{% import "example-list.md" as examples %}

{% highlight "html" %}
<script type="edgeside/{{elementType}}" ...>
{% endhighlight %}

{{ content | safe }}

## Attributes

|Name|Description|Required?|
|:---|:---------|:---:|
{% for attribute in element.attributes -%}
|**{{attribute.name}}**|{{attribute.description}}|{{"yes" if attribute.required else "no"}}|
{% endfor %}

## Element content

{{ element.content if element.content else "Empty."}}

---

## Examples

{{examples.list(collections,elementType)}}
