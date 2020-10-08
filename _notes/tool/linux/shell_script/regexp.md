---
---


```shell
REGEXP='\{.+\} (\{.+\})'
if [[ ${INPUT} =~ ${REGEXP} ]]; then
  MATCH="${BASH_REMATCH[1]}"
fi
```
