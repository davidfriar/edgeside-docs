---
title: URL Rewriting
order: 6
---

## Rationale

It is quite a common use case to use a single page provided by the origin to deliver multiple pages to the site visitor. A common example would be a product detail page on an eCommerce site which is used as a 'template page' for displaying a different product depending on how it is parameterised. A simple way to achieve this would be to use a request parameter to pass an identifier for the product we want to display:

```
http://myshoppingsite.com/products/product.html?id=1234
```
However, we might want to use 'prettier' URLs, like this:
```
http://myshoppingsite.com/products/1234/product.html
http://myshoppingsite.com/products/5432/product.html
```
The problem here is that without some magic happening in the Cloudflare worker we are now going to be making requests for a whole set of different URLs to the origin, whereas the thing we were trying to achieve was to use just one CMS page to support this. The worker needs to be able to rewrite the incoming URLs to that when it requests the page from the origin, we always use the same page.

## Configuring URL rewrites

URL rewrites have to be configured in the worker. (Almost by definition we cannot do this at the origin, because this is a configuration that tells the worker where to find an origin page.)

The configuration for URL rewrite rules is an array of two-element arrays, giving a source and a destination for each rule, where the source can include regular expressions. It is added to the configuration object which is passed to the *handleRequest* function, like this:

```
addEventListener('fetch', (event) => {
  event.respondWith(
    handleRequest(event.request, {
      urlRewriteRules: [
        ['products/.*/product.html', 'products/product.html'],
        // add other rules here
      ],
    }),
  )
})
```
