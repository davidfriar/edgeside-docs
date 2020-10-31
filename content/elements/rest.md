---
title: Rest Query
tags: rest
order: 3
element:
  attributes:
    - name: data-edgeside-key
      description: specifies a key under which it should output data
      required: true
    - name: data-edgeside-endpoint
      description: specifies the endpoint for the REST query
      required: true
    - name: data-edgeside-cache-ttl
      description: specifies a Time To Live value for caching of query results in the Cloudflare cache, in seconds (default = 60)
      required: false
    - name: data-edgeside-parameter-map
      description: provides an optional mapping between request params or URL segments in the original page request and parameters to the query. (see [Parameter Mapping](/parametermapping))
      required: false
---
Fetches data from any service that exposes a REST API.

*Current limitations:*
* *No out of the box handling of authentication. For now any service that requires authentication to be handled in a secure way will need a custom element handler (see [Customisation](/customisation))*
* *Parameter mapping not working for service URLs that require parameters to be passed as request params (fix coming soon)*
