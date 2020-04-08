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
  apple)
    echo Here is your apple.
    ;;
  banana)
    echo Here is your banana.
    ;;
  *)
    echo Sorry I dont understand.
esac
```
