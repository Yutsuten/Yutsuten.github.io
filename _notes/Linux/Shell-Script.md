```shell
# Check the number of arguments
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 [stage]" >&2 # >&2 Echo output to standard error instead of standard out
  exit 1
fi

python manage.py collectstatic --settings my_project.settings_deploy.$1 --noinput &&
zappa update $1

# Bulk copy with renaming
for file in ./*; do
  cp "${file##*/}" "/path/to/destination/m_${file##*/}"
done

# If elif
if (( $(echo $score'>=9' | bc -l) )); then
    color='brightgreen';
elif (( $(echo $score'>=7.5' | bc -l) )); then
    color='yellow';
fi
```
