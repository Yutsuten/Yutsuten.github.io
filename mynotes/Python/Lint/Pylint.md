### Sample configuration file
#### .pylintrc
```
[MASTER]
# Load modules inside another folder
init-hook='import sys, os; sys.path.append(os.getcwd() + '/module-to-load')'
# Ignore members inside hello module
extension-pkg-whitelist=hello

[BASIC]
# Change to camel case
function-rgx=_?_?[a-z][A-Za-z0-9]{1,30}$
method-rgx=_?_?[a-z][A-Za-z0-9]{1,30}_?_?$
attr-rgx=_?_?[a-z][A-Za-z0-9]{1,30}$
argument-rgx=_?[a-z][A-Za-z0-9]{1,30}$
variable-rgx=_?[a-z][A-Za-z0-9]{1,30}$
inlinevar-rgx=_?[a-z][A-Za-z0-9]{1,30}$

[TYPECHECK]
# Ignore members inside hello module
ignored-modules=hello

[MESSAGES CONTROL]
# Disable some rules
disable=unused-argument,protected-access
```
