
//Digit Manipulation (Foundation) Problems

/*
Problem 1: Count Digits in a Number**

**Description:**
Given an integer `n`, return the number of digits in `n`.

**Example 1:**

```
Input: n = 12345  
Output: 5
```

**Example 2:**

```
Input: n = 7  
Output: 1
```

Constraints:  `0 <= n <= 10^9`

*/
function countDigit(n){
    if(n===0) return 1;
    if(n < 0 || n > Math.pow(10,9)) {
        return "Invalid input: n must be between 0 and 10^9";
    }
    let count = 0;
    while(n > 0){
        n = Math.floor(n/10);
        count = count + 1;
    }
    return count;
}
console.log(countDigit(3467));
console.log(countDigit(-1230904));
console.log(countDigit(0));
console.log(countDigit(908765490));
/*
Problem 2: Reverse a Number

**Description:**
Given an integer `n`, return the number formed by reversing its digits.

**Example 1:**

```
Input: n = 1234  
Output: 4321
```

**Example 2:**

```
Input: n = 900  
Output: 9
```

**Constraints:**  `0 <= n <= 10^9`

*/

/*
Problem 3: Palindrome Number Check**

**Description:**
A number is called a palindrome if it reads the same backward as forward.
Given an integer `n`, return `true` if `n` is a palindrome, otherwise return `false`.

**Example 1:**

```
Input: n = 121  
Output: true
```

**Example 2:**

```
Input: n = 123  
Output: false
```

Constraints: `0 <= n <= 10^9`

*/

/*
Problem 4: Sum of Digits**

**Description:**
Given an integer `n`, return the sum of all digits in `n`.

**Example 1:**

```
Input: n = 1234  
Output: 10   (1 + 2 + 3 + 4 = 10)
```

**Example 2:**

```
Input: n = 505  
Output: 10   (5 + 0 + 5 = 10)
```

Constraints: `0 <= n <= 10^9`

*/

/*
Problem 5: Product of Digits**

**Description:**
Given an integer `n`, return the product of all its digits.

**Example 1:**

```
Input: n = 234  
Output: 24   (2 * 3 * 4 = 24)
```

**Example 2:**

```
Input: n = 105  
Output: 0   (1 * 0 * 5 = 0)
```

Constraints: `0 <= n <= 10^9`

*/

// Mini Project – Number Analyzer

/*

Description:
Write a program that takes an integer `n` and prints the following:

1. Count of digits in `n`
2. Sum of digits of `n`
3. Product of digits of `n`
4. Reverse of `n`
5. Whether `n` is a palindrome

**Example:**

```
Input: n = 12321  

Output:
Count of digits: 5  
Sum of digits: 9  
Product of digits: 12  
Reverse: 12321  
Palindrome: true
```

Constraints: `0 <= n <= 10^9`

---
*/
