---
doc: https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions
---

## Setup a basic workflow

```shell
mkdir -p .github/workflows
touch .github/workflows/continuous-testing.yml
```

Example of basic .yml file:

```yml
name: Continuous Testing
on: push
jobs:
  unit-test:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Run command
        run: ls -al
```

`name` is the name of the workflow.
`on` is when the workflow is triggered.

`jobs.<id>` are run in different machines, in parallel by default.
`jobs.<id>.name` is the name of the job.
`jobs.<id>.runs-on` is the OS of the machine.
`jobs.<id>.steps` each step to complete the job.
