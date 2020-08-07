---
---

## Usage

```shell
kill PID  # Defaults to SIGTERM
kill -9 PID
kill -9 %JOBID
```

Obs: `Ctrl+C` sends the signal `SIGINT`.

| Signal | Value | Action | Comment |
| --- |
| `SIGHUP` | 1 | Term | Hangup detected on controlling terminal or death of controlling process |
| `SIGINT` | 2 | Term | Interrupt from keyboard |
| `SIGQUIT` | 3 | Core | Quit from keyboard |
| `SIGILL` | 4 | Core | Illegal Instruction |
| `SIGABRT` | 6 | Core | Abort signal from abort(3) |
| `SIGFPE` | 8 | Core | Floating point exception |
| `SIGKILL` | 9 | Term | Kill signal |
| `SIGSEGV` | 11 | Core | Invalid memory reference |
| `SIGPIPE` | 13 | Term | Broken pipe: write to pipe with no |
| `SIGTERM` | 15 | Term | Termination signal |
