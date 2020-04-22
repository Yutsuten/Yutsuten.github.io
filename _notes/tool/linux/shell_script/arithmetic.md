---
---

## Integer calculations

```shell
echo $(( 5+2 ))  # 7
echo $(( 5-2 ))  # 3

echo $(( 5*2 ))  # 10
echo $(( 5/2 ))  # 2
echo $(( 5%2 ))  # 1

echo $(( 5**2 )) # 25
```

## Decimal calculations

```shell
sudo apt install bc  # Required package

echo '10.5+2.5' | bc -l    # 13.0
echo '10.5-2.5' | bc -l    # 8.0

echo '10.5*2.5' | bc -l    # 26.25
echo '10.5/2.5' | bc -l    # 4.20000000000000000000
echo 'scale=2; 10.5/2.5' | bc -l  # 4.20

echo '10.5^2.5' | bc -l    # 110.25
echo 'sqrt(10.5)' | bc -l  # 110.25
```

### Relational expressions

```shell
echo '8.5<7' | bc -l   # 0
echo '8.5<=7' | bc -l  # 0
echo '8.5>7' | bc -l   # 1
echo '8.5>=7' | bc -l  # 1
echo '8.5==7' | bc -l  # 0
echo '8.5!=7' | bc -l  # 1
```

### Boolean expressions

```shell
echo '!(8.5>7)' | bc -l  # 0
echo '(8.5>7) && (8.5>9)' | bc -l  # 0
echo '(8.5>7) || (8.5<9)' | bc -l  # 1
```
