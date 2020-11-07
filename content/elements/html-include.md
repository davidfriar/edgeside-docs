---
title: HTML Include
tags: html-include
order: 6
element:
  attributes:
    - name: data-edgeside-input
      description: specifies a key under which it should  expect to find data
      required: false
    - name: data-edgeside-endpoint
      description: specifies the endpoint from which to fetch an HTML fragment
      required: true
    - name: data-edgeside-cache-ttl
      description: specifies a Time To Live value for caching of query results in the Cloudflare cache, in seconds (default = 60)
      required: false
---
Fetches an HTML fragment from an arbitrary URL and includes it in the page.

*Possible future enhancements:*
* *add parameter mapping to allow URL to be determined from the page request*
* *post-processing of the HTML using HTMLRewriter to allow rewrites such as fixing up links etc.*

