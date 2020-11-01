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

#### Live Results:
{% if item.data.frame_url %}
  <iframe class="live-results" width="100%" height="100%" src="{{item.data.frame_url}}" frameborder="0"></iframe>
{% else %}
  <div class="live-results">
  {{item.templateContent|safe}}
  </div>
{% endif %}

#### Live Results (Source):

<pre><code class="live-results-source language-html"></code></pre>

---

{% endfor %}

