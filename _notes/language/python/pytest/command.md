---
doc: https://docs.pytest.org/en/latest/contents.html
update: 2021-04-26
---

## Usage

```shell
pytest OPTIONS FILE_OR_DIR
```

| Option | Description |
| --- | --- |
| `-v` | Increate verbosity. |

Usage example:

```shell
pytest -vvv tests/unit_test.py::TestApp::test_hello
```
