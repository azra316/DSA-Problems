
# 🔹 Number Problems – Thought Process Cheat Sheet

---

## **1. Digit Manipulation (extract digits)**

* Use `% 10` → last digit.
* Use `/ 10` → remove last digit.
* Loop until number = 0.
  👉 Apply to: reverse, palindrome, sum/product, largest/smallest, first+last digit, even/odd digit count.

---

## **2. Special Property Numbers**

* Definition-based.
* Break into digits → apply rule → compare with original.
  👉 Examples:
* Armstrong → sum(digit^count) == number
* Harshad → number % sum(digits) == 0
* Automorphic → square ends with number
* Strong → sum(factorial(digit)) == number

---

## **3. Mathematical Properties**

* Focus on divisibility & formulas.
  👉 Key checks:
* Prime → divisible only by 1 & itself (check till √n).
* Composite → not prime & >1.
* GCD → Euclidean algorithm.
* LCM → (a\*b)/GCD.
* Fibonacci → generate series or use formula.

---

## **4. Range Problems**

* Loop from start → end.
* For each number, apply single-number logic.
* Collect/print if condition true.
  👉 Example: all primes, all Armstrong numbers, all palindromes, etc.

---

## **5. Conversion Problems**

* Decimal → other base: divide by base, collect remainders.
* Other base → Decimal: digit × (base^position).
* Count set bits: keep dividing by 2, count `% 2 == 1`.

---

## **6. Advanced Challenges**

* Optimize with math tricks.
  👉 Examples:
* Prime check → √n method.
* GCD → Euclidean algorithm.
* Digital root → (n % 9 == 0 ? 9 : n % 9).
* Power of 2 → keep dividing by 2 OR use (n & (n-1)) == 0.
* Palindrome check → reverse using math, not string.

---

## **General Rules**

1. Understand **definition** of property.
2. Decide: need **digits** or **math check**?
3. Choose initial value:

   * sum → 0
   * product → 1
   * max → 0
   * min → 9
4. Loop until done.
5. Compare result with number or return result.

---

✅ If digits involved → `%` and `/`.
✅ If math property → formulas/definitions.
✅ If range → loop + reuse single check.
✅ If conversion → divide/multiply with base.
✅ If advanced → optimize with math.

---

Would you like me to also **design a printable PDF cheat sheet (with little tables + diagrams)** so you can stick it in your study space?
