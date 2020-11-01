---
title: GraphQL Query
tags: graphql
order: 2
element:
  attributes:
    - name: data-edgeside-key
      description: specifies a key under which it should output data
      required: true
    - name: data-edgeside-endpoint
      description: specifies the endpoint for the GraphQL service
      required: true
    - name: data-edgeside-cache-ttl
      description: specifies a Time To Live value for caching of query results in the Cloudflare cache, in seconds (default = 60)
      required: false
    - name: data-edgeside-parameter-map
      description: provides an optional mapping between request params or URL segments in the original page request and parameters to the query. (see [Parameter Mapping](/parametermapping))
      required: false
    - name: data-edgeside-input-key
      description: specifies an optional key under which it should be able to find input data which can be used in a parameter map
      required: false
  content: A query in the GraphQL language
---
Fetches data from any service that exposes a GraphQL API.

*Current limitations:*
* *No out of the box handling of authentication. For now any service that requires authentication to be handled in a secure way will need a custom element handler (see [Customisation](/customisation))*
