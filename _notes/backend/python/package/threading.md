---
---

### Thread
```python
import threading

my_thread = threading.Thread(target=my_method, args=(1, 2))
my_thread.start()
```

### Event
```python
import threading

event = threading.Event()
# Create a thread
event.wait()  # Wait for event.set() be called
```

### Celery wait
```python
import threading

def sleep_raise_event(event, seconds):
  from time import sleep
  sleep(seconds)
  event.set()

def lazy_sleep(seconds):
  event = threading.Event()
  threading.Thread(target=sleep_raise_event, args=(event, seconds)).start()
  event.wait()

while True:
  lazy_sleep(1)
```
