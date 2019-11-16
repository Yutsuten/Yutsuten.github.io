---
---

[First steps](http://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html)

### Install
```shell
sudo apt install rabbitmq-server
pip install celery
```

### Create the task method
#### tasks.py
```python
from celery import Celery

app = Celery('tasks', broker='pyamqp://guest@localhost//')

@app.task
def add(x, y):
    return x + y
```

### Run Celery worker server
```shell
celery -A tasks worker --loglevel=info
```

### Calling the task
```python
>>> from tasks import add
>>> add.delay(2, 3)  # Returns AsyncResult
```

### Task status
- [Documentation](http://docs.celeryproject.org/en/latest/reference/celery.result.html)

```python
from celery.result import AsyncResult
task = AsyncResult("task-id")
task.ready()  # True or False
```

### Raise SoftTimeLimitExceeded exception on the task
```python
task.revoke(terminate=True, signal='SIGUSR1')
```

### Abortable task
[Reference](http://docs.celeryproject.org/en/latest/reference/celery.contrib.abortable.html)
```python
from celery.contrib.abortable import AbortableTask, AbortableAsyncResult

@app.task(bind=True, base=AbortableTask)
def long_running_task(self):
    # ...
    if self.is_aborted():
        # respect aborted state, and terminate gracefully.
        logger.warning('Task aborted')
        return
    # ...

def cancel_task(task_id):
    task = AbortableAsyncResult(task_id)
    task.abort()
```