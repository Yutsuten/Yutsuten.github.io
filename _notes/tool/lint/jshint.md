---
---

### Install

```bash
yarn global add jshint
```

### Configuration file

[Documentation](https://jshint.com/docs/)

#### Naming / path

| Home | Parent |
| ---- | ------ |
| - | `.jshintrc` |

#### Command

There is not command to generate a configuration file.

#### Sample

```json
{
    "indent": 4,
    "boss": true,
    "eqeqeq": true,
    "eqnull": true,
    "expr": true,
    "immed": true,
    "noarg": true,
    "onevar": false,
    "quotmark": "single",
    "smarttabs": true,
    "trailing": true,
    "unused": false,
    "node": true,
    "evil": true,
    "esnext": true,
    "predef": ["window", "document", "__ENABLE_DEV_MODE_CONTROLS"],
    "browser": true,
    "validthis": true,
    "loopfunc": true
}
```
