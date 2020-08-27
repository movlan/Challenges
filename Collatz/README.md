# Collatz Conjecture

## Instructions

The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is written in pseudocode]

```none
if(number is even) number = number / 2
if(number is odd) number = 3 * number + 1
```

### Task

Your task is to make a function collatz that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

### References

Collatz conjecture wikipedia page: [](https://en.wikipedia.org/wiki/Collatz_conjecture)

## Example

```markdown
collatz(1) returns 0
(1 is already 1)

collatz(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

collatz(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

collatz(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
```
