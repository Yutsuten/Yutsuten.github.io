```shell
-i  # Edit files in place
-e  # Add the script to the commands to be executed (for adding multiple commands)
-n  # Suppress empty patterns output
```

### Edit
```shell
sed -ie 's/some_pattern/hello/g' my_text_file  # Replace
sed -ie '/pattern/a some text here/' my_text_file  # Add after
```

### Find
```shell
sed -ne 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
```
