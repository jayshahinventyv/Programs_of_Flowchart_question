# Assignment 5
## Aim:
Develop a program that reads a number.Number should be atleast 4 digit long.Generate all possible permutations and 
combinations of that number and find prime from that. Compare the prime numbers array with Pascal's Triangle and highlight
the prime numbers in the Pascal's Triangle. Create an error ratio list and print it. Also create the list of matched elements and missing elements.

## Code:
![Snip1](https://github.com/jayshahinventyv/Training_Inventyv_JayShah/assets/153286470/9bd88c49-25e6-40f8-81d6-3fb5b27f669f)
![snip3](https://github.com/jayshahinventyv/Training_Inventyv_JayShah/assets/153286470/fab631f2-fa44-43cd-9824-4c11f3bfc169)
![snip2](https://github.com/jayshahinventyv/Training_Inventyv_JayShah/assets/153286470/b606b071-52de-4713-bcb8-ea9522ec0566)

## Explaination:

 * The genNums(num) function converts a number into an array of its digits and generates permutations recursively, storing valid numbers in an array called pnc.
 * The isPrime(number) function checks if a given number is prime by iterating up to its square root and checking for divisibility.
 * The code filters prime numbers from the generated array, finds the maximum using the spread operator, and logs it to the console.
 * The generatePascals(stopElement, primeNumbers, matched_elements) function creates Pascal's Triangle with prime numbers, stopping when an element is greater than or equal to stopElement, and displays it in an HTML element.

## Author
 * Jay Shah
