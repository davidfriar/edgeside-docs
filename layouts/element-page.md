---
layout: page
---


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
{% for item in collections[elementType] | includeTag('example') | sort(false, true, 'fileSlug') %}

### {{item.fileSlug}} - {{item.data.title}}

{{item.data.description}}

{% highlight "html" %}
{{item.templateContent|safe}}
{% endhighlight %}

{% if item.data.frame_url %}
  {% include "framed-results.md" %}
{% else %}
  {% include "results.md" %}
{% endif %}

---

{% endfor %}

