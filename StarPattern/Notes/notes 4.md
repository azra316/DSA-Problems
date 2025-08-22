
# 🔑 Universal Cheat Sheet: Decreasing → Increasing Patterns

### Step 1: **Find Peak (n)**

* Peak = maximum length in a row (sabse bada part).
* Example: if pattern starts with 5 stars → `n = 5`.

---

### Step 2: **Total Rows**

* Formula:

  ```
  totalRows = 2 * n - 1
  ```
* Example: n=5 → totalRows = 9.

---

### Step 3: **Formula for Count in Each Row**

* If row index `i` is in **first half** (i < n):

  ```
  count = n - i
  ```
* If row index `i` is in **second half** (i >= n):

  ```
  count = i - n + 2
  ```

---

### Step 4: **Build Row According to Count**

* Stars → `"*".repeat(count)`
* Numbers → loop from 1 to count
* Alphabets → loop from 'A' to count

---

### Step 5: **Dry Run Table (Always do this once)**

For n = 5:

| Row (i) | Formula     | Count | Row output idea |
| ------- | ----------- | ----- | --------------- |
| 0       | n - i = 5   | 5     | \*\*\*\*\*      |
| 1       | n - i = 4   | 4     | \*\*\*\*        |
| 2       | n - i = 3   | 3     | \*\*\*          |
| 3       | n - i = 2   | 2     | \*\*            |
| 4       | n - i = 1   | 1     | \*              |
| 5       | i - n + 2=2 | 2     | \*\*            |
| 6       | 3           | 3     | \*\*\*          |
| 7       | 4           | 4     | \*\*\*\*        |
| 8       | 5           | 5     | \*\*\*\*\*      |

---

# 💻 Universal Code Skeleton

```js
let n = 5; 
let totalRows = 2 * n - 1;

for (let i = 0; i < totalRows; i++) {
    let count = (i < n) ? (n - i) : (i - n + 2);

    let row = "";
    for (let j = 0; j < count; j++) {
        row += "*"; // ⭐ Change this to number/alphabet as needed
    }
    console.log(row);
}
```

---

# 🎯 How to Apply (3 Versions)

1. **Stars** → row += "\*"
2. **Numbers** → row += (j+1)
3. **Alphabets** → row += String.fromCharCode(65 + j)

---

✅ With this cheat sheet, you never have to guess formulas again.
Bas check karo:

* Peak kitna hai? (n)
* Total rows = 2n-1
* Formula use karo for count
* Fill row with stars/numbers/alphabet

---
**In simple words** 

# 🌈 Magical Recipe (Cheat Sheet for Decreasing → Increasing)

---

## 🥇 Rule 1: **Find the Peak Mountain Top**

* Look at the first row.
* How many items (stars/numbers/letters) are there?
  👉 That’s your **Peak (n)**.

Example:

```
*****
****
***
**
*
**
***
****
*****
```

Here, first row has 5 stars → **n = 5**.

---

## 🥈 Rule 2: **Count the Rows (Mountain up + Mountain down)**

* A mountain goes **down** then **up**.
* So total rows =

  ```
  2 * n - 1
  ```

Why minus 1? Because the middle row is shared by both sides.

Example: n=5 → total rows = 9.

---

## 🥉 Rule 3: **How Many to Print in Each Row?**

Now the secret formula:

* In the **first half** (top to middle):

  ```
  count = n - i
  ```
* In the **second half** (after middle):

  ```
  count = i - n + 2
  ```

👉 `i` means row number (start from 0).

---

## 🏆 Rule 4: **Decide What You Print**

* If it’s stars → print `"*"` that many times.
* If it’s numbers → print `1 2 3 … count`.
* If it’s alphabets → print `A B C … till count`.

So same recipe works for all types. 🍲

---

## 🌟 Rule 5: **Make a Table Before Coding**

This is like a treasure map 🗺️.
Example: n=5

| Row | Formula Used | Count | Print      |
| --- | ------------ | ----- | ---------- |
| 0   | n - i = 5    | 5     | \*\*\*\*\* |
| 1   | n - i = 4    | 4     | \*\*\*\*   |
| 2   | n - i = 3    | 3     | \*\*\*     |
| 3   | n - i = 2    | 2     | \*\*       |
| 4   | n - i = 1    | 1     | \*         |
| 5   | i-n+2 = 2    | 2     | \*\*       |
| 6   | i-n+2 = 3    | 3     | \*\*\*     |
| 7   | i-n+2 = 4    | 4     | \*\*\*\*   |
| 8   | i-n+2 = 5    | 5     | \*\*\*\*\* |

---

## 💻 Universal Code Skeleton

```js
let n = 5; 
let totalRows = 2 * n - 1;

for (let i = 0; i < totalRows; i++) {
    let count = (i < n) ? (n - i) : (i - n + 2);

    let row = "";
    for (let j = 0; j < count; j++) {
        row += "*"; // ⭐ Replace with number/alphabet if needed
    }
    console.log(row);
}
```

---

# 🎮 Examples with Same Recipe

### ⭐ Stars

```
*****
****
***
**
*
**
***
****
*****
```

### 🔢 Numbers

```
12345
1234
123
12
1
12
123
1234
12345
```

### 🔤 Alphabets

```
ABCDE
ABCD
ABC
AB
A
AB
ABC
ABCD
ABCDE
```

---

👉 So Azra, remember this like a **mountain story**:

* First half: you are **climbing down** (subtract stars).
* Middle row: you touch the **bottom** (only 1 star/number/letter).
* Second half: you are **climbing up** (add stars again).

That’s it! 🎯

---

Would you like me to also make the **same cheat sheet** for the **opposite type (increasing → decreasing)** so you’ll have **both mountains** in your toolkit? 🏔️
