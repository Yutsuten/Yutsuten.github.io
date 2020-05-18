---
---

## If-elif-else

```shell
if [[ expression1 ]]; then
  echo 'First condition satisfied!!'
elif [[ expression2 ]]; then
  echo 'Second condition satisfied!!'
else
  echo 'No conditions satisfied.'
fi
```

## Case-esac

```shell
case $FRUIT in
  apple) echo Here is your apple.  ;;
  banana) echo Here is your banana.  ;;
  *) exit 1 ;;
esac
```

## For

```shell
for i in {1..10}; do
  echo $i
done

for MYVAR in val1 val2 val3; do
  echo $MYVAR
done
```

## While

```shell
while condition; do
  do_domething
done
```
