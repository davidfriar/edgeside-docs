{% macro list(collections, topic) %}
{% for item in collections[topic] | includeTag('example') | sort(false, true, 'fileSlug') %}

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
{% endmacro %}
