---
doc: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/query-dsl-terms-query.html
---

```shell
curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d "${JSON}"
```

```json
{
  "query": {
    "terms": {
      "user": ["Yutsuten", "Taro"]
    }
  }
}
```
