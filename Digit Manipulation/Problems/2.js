/*
Problem 1: Largest Digit in a Number

**Description:**
Given an integer `n`, return the largest digit present in `n`.

**Example 1:**

```
Input: n = 52743
Output: 7
```

**Example 2:**

```
Input: n = 9081
Output: 9
```
*/
function largestDigit(n){
    let maxDigit = 0; 
    while(n > 0){
        let lastDigit = n % 10;
        if(lastDigit > maxDigit){
            maxDigit = lastDigit;
        }
        n = Math.floor(n/10);
    }
    return maxDigit;
}
console.log(largestDigit(52743));
console.log(largestDigit(98674523));
/*
Problem 2: Smallest Digit in a Number**

**Description:**
Given an integer `n`, return the smallest digit present in `n`.

**Example 1:**

```
Input: n = 52743
Output: 2
```

**Example 2:**

```
Input: n = 9081
Output: 0
```
*/

function smallestDigit(n){
    let minDigit = 0; 
    while(n > 0){
        let lastDigit = n % 10;
        if(lastDigit <  minDigit){
            minDigit = lastDigit;
        }
        n = Math.floor(n/10);
    }
    return maxDigit;
}
/*
Problem 3: Count Even and Odd Digits**

**Description:**
Given an integer `n`, return the number of even digits and odd digits present in `n`.

**Example 1:**

```
Input: n = 12345
Output: even = 2, odd = 3
```

**Example 2:**

```
Input: n = 24680
Output: even = 5, odd = 0
```
*/

/*
Problem 4: Sum of First and Last Digit**

**Description:**
Given an integer `n`, return the sum of its first and last digit.

**Example 1:**

```
Input: n = 2456
Output: 8   // first digit = 2, last digit = 6
```

**Example 2:**

```
Input: n = 7
Output: 14   // first digit = 7, last digit = 7
```
*/

/*
Problem 5: Digital Root

**Description:**
Given an integer `n`, repeatedly sum its digits until the result has only one digit. Return that digit.

**Example 1:**

```
Input: n = 9875
Output: 2   // 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2
```

**Example 2:**

```
Input: n = 49
Output: 4   // 4+9 = 13 → 1+3 = 4
```
*/

/*
Mini Project: Digit Analyzer**

**Description:**
Write a program `digitAnalyzer(n)` that analyzes a number and outputs:

 Largest digit
 Smallest digit
 Count of even and odd digits
 Digital root

**Example:**

```
Input: n = 52743
Output:
Largest digit = 7
Smallest digit = 2
Even digits = 2
Odd digits = 3
Digital root = 3
```
*/
