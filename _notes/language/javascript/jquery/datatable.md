---
doc: https://datatables.net/reference/api/
update: 2021-02-22
---

## Usage

Initialize the table:

```javascript
let table = $('#table').DataTable();
```

Update table's content:

```javascript
table.rows().every(function () {
   let data = this.data();
   data.counter += 1;
   this.invalidate();
});
```

Redraw the table (use false to keep pagination).

```javascript
table.draw(false);
```
