---
---

## Usage

```shell
curl OPTIONS URL
-s       # Silent (Does not show progress bar)
-o FILE  # Write data into file
-L       # Follow redirect
-k       # Skip SSL certificate check
```

## Download file from remote

```shell
curl "https://img.shields.io/badge/pylint-10-green.svg"
curl -o pylint.svg "https://img.shields.io/badge/pylint-10-green.svg"
curl -o nvim.appimage -L https://github.com/neovim/neovim/releases/download/v0.4.2/nvim.appimage
```

## Put request

```shell
curl -X PUT \
  -H 'Content-Type:application/json' \
  -d '{"json":1,"encoded":{"key":"value"}}' \
  http://mysite.com
```
