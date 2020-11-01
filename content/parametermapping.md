---
title: Parameter Mapping
order: 5
---

Some elements have an attribute named **data-edgeside-parameter-map**. The purpose of this element is to enable request parameters to the current page to be passed as variables to a query. For example, we might want to create a static html page called *country.html*, which displays details about a particular country in the world. We only want to create one such page, but we want it to display details of whatever country our user is interested in, when she accesses the site with a URL that might look like this:

    https://mysite.com/country?country-code=GB

In order to achieve this we can use a **parameter map**.

* A **parameter map** consists of one or more **parameter map entries**, separated by commas.

* A **parameter map entry** consists of a **left hand side** and a **right hand side**, separated by a colon.

* If the **left hand side** and the **right hand side** of a parameter map are identical, the comma may be omitted and the entry can consist of just a single part which stands for both left and right hand sides.

* The **left hand side** of a **parameter map entry** denotes a variable name, which can be used in a service query (either as part of the endpoint URL, in the case of a REST query, or as a GraphQL variable that can be referenced as part of a GraphQL query). For GraphQL queries, the left hand side consists of any valid GraphQL variable name. For REST queries, the left hand side must begin with '$' followed by any string (this inconsistency between REST and GraphQL elements may be removed in future).

* The **right hand** side of a **parameter map entry** refers to the URL current page request. This will typically be the name of a URL search parameter, whose value will then be mapped to the request.

* There is a special form of the **right hand side** which can be used to refer to URL segments instead of search parameters. This takes the form '/n' (a slash character followed by an integer). The integer part of this form refers to the number of segments from the right hand end of the URL, where 0 signifies the 'filename', 1 signifies the segment before the filename and so on. Thus if we have a URL such as *http://mysite.com/geography/GB/country.html*, we can refer to the country code with '/1'. Note that in order to take advantage of this capability you will most likely also need to use the [URL Rewriting](/urlrewriting) capability in order to allow a single page to be served to multiple URLs.

* In addition to deriving variables from the current page request, it is also possible in some elements to use the context of data that has been fetched by some other element. This requires that the **data-edgeside-input-key** has a value which refers to some other element which can provide the data. In this case we can use a **right hand side** of the form *${expression}*, where *expression* is a JavaScript expression which will be evaluated in the context of the data found under the input key specified by the element.


The table below summarises the possibilities:

| Parameter Map | Meaning |
|---|---|
| foo | Use the search parameter named 'foo' as a variable named 'foo'. |
| foo, bar | Use the search parameter named 'foo' as a variable named 'foo' and the search parameter named 'bar' as a variable named 'bar'.|
| foo:wibble, bar:wobble | Use the search parameter named 'wibble' as a variable named 'foo' and the search parameter named 'wobble' as a variable named 'bar'.|
| city:/1,country:/2 | Extract the variables 'city' and 'country' from a URL, for example, like this *http://mysite.com/{country}/{city}/country.html*. |
| $foo:foo | Use the request parameter named 'foo' as a value to replace the string $foo in the endpoint URL of a rest query. |
| country:${cf.country} | Make the country code detected by cloudflare in the incoming request available to use in a query as the variable 'country'. This assumes that there is a preceding [Request Data](request-data) element and that our **edgeside-data-input-key** has been set to the same value as its **data-edgeside-key.** |
