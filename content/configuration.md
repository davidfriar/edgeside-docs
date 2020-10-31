---
title: Configuration
order: 3
---

The overall behaviour of the framework can be customised via a 'Config' object. The framework has a default config, into which is merged any project specific config.
Currently the config object allows: addition of custom element handlers, url rewriting rules and converters (to support non-json services - not yet implemented, and not sure if this is the right way to go)
Some basic configurations (e.g. the host to use as the origin) are received by the worker as environment variables (configured in wrangler.toml).(Cloudflare also has a mechanism that will allow 'secrets' to be passed in a secure way as environment variables).
