```shell
# Check the number of arguments
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 [stage]" >&2
  exit 1
fi

python manage.py collectstatic --settings my_project.settings_deploy.$1 --noinput &&
zappa update $1
```