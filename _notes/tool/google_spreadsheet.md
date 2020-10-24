---
---

## Usage & Tips

Steps to specify the cell of another sheet:

Type `=` followed by the sheet name, an exclamation point, and the cell being copied.
If the sheet name contain spaces, use quotes around it.

```crystal
=Sheet1!A1
='Sheet two'!B4
```

To count the number of filled cells:

```crystal
=COUNTA(B5:B200)
```
