---
doc: https://likegeeks.com/expect-command/
update: 2021-06-21
---

## Usage

Expect is a program that "talks" to other interactive programs according to a script.

Some common commands are:

| Command | Description |
| --- | --- |
| `spawn` | Starts a script or a program. |
| `expect` | Waits for program output. |
| `send` | Sends a reply to your program. |
| `interact` | Allows you to interact with your program. |
| `set` | Defines a variable. |

## Example

```shell
set user "myuser"
set pass "mypass"
set serv "myserv"

spawn ssh step_server
expect {
  "yes/no" { send "yes\r"; exp_continue }
  "password:" { send "secret\r" }
}
expect {
  "step_server ~]\\\$" { send "ssh $user@$serv\r"; exp_continue }
  "password:" { send "$pass\r" }
}

interact
exit 0
```
