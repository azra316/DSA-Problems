# Patterns where stars first **increase** and then **decrease** (without spaces). Example:
# thought process + chart method


### Odd `n=5`

```
*
**
***
**
*
```

### Even `n=6`

```
*
**
***
***
**
*
```

---

# 🔑 Step 1: Human Thought Process

Imagine rows as a **story of growth + fall**.

* First half = stars **grow** row by row.
* Second half = stars **shrink** row by row.
  Middle row is the **turning point**.
* For **odd n** → exact middle row is peak (maximum stars).
* For **even n** → two middle rows have equal stars (plateau peak).

---

# 🔑 Step 2: Condition of `i` (row number)

* `i` always goes from `0 → n-1` (total rows).
* First half = **increasing formula**.
* Second half = **decreasing formula**.

So we **split the problem** into 2 cases:

* If `i < ceil(n/2)` → use **increasing**.
* Else → use **decreasing**.

---

# 🔑 Step 3: Condition of `j` (stars per row)

This is where you get stuck 😅 → let’s fix it.

👉 Rule:

* In **increasing half**, stars = `i+1`.
* In **decreasing half**, stars = `n - i`.

That’s it. (Simple right? 😊)

---

# 🔑 Step 4: Formula Summary

* If `i < ceil(n/2)` → `j <= i`
* Else → `j < n - i`

---

# 🔑 Step 5: Dry Run (Odd n=5)

| Row (i) | Condition | Stars count (formula) | Output |
| ------- | --------- | --------------------- | ------ |
| 0       | i < 3     | i+1 = 1               | \*     |
| 1       | i < 3     | i+1 = 2               | \*\*   |
| 2       | i < 3     | i+1 = 3               | \*\*\* |
| 3       | i>=3      | n-i = 2               | \*\*   |
| 4       | i>=3      | n-i = 1               | \*     |

---

# 🔑 Step 6: Dry Run (Even n=6)

| Row (i) | Condition | Stars count (formula) | Output |
| ------- | --------- | --------------------- | ------ |
| 0       | i < 3     | i+1 = 1               | \*     |
| 1       | i < 3     | i+1 = 2               | \*\*   |
| 2       | i < 3     | i+1 = 3               | \*\*\* |
| 3       | i>=3      | n-i = 3               | \*\*\* |
| 4       | i>=3      | n-i = 2               | \*\*   |
| 5       | i>=3      | n-i = 1               | \*     |

---

# 🔑 Step 7: General Thought Process (like a 10-year-old)

1. **Count rows** → total = `n`.
2. **Find middle** → `ceil(n/2)`.
3. **Check if I’m before or after middle**:

   * If before middle → stars = `i+1`.
   * If after middle → stars = `n-i`.
4. **Loop j** → run `j` from `0 → stars-1`.

---

# 🔑 Step 8: Code (JS)

```js
let n = 5; // try 6 also
for(let i=0; i<n; i++){
    let row="";
    let stars = (i < Math.ceil(n/2)) ? i+1 : n-i;
    for(let j=0; j<stars; j++){
        row += "*";
    }
    console.log(row);
}
```

---

✅ Now your brain shortcut:

* "Before middle → j < i+1"
* "After middle → j < n-i"

That’s the whole game 🎯

---

# 🌟 General Thinking Process (for increasing + decreasing patterns)

### Step 1: Count Rows

* First ask: **How many total rows (n)?**

---

### Step 2: Find the Turning Point (Middle)

* The **middle row(s)** is where stars stop growing and start shrinking.
* Middle = `ceil(n/2)`

  * If `n` is odd → one middle row (peak).
  * If `n` is even → two middle rows (plateau peak).

---

### Step 3: Split the Rows

* Think of rows as **two parts**:

  1. **Growing half** → before middle.
  2. **Shrinking half** → after (and including) middle.

---

### Step 4: Decide Formula for Stars

* If row is in **growing half** → stars = `i + 1`.
* If row is in **shrinking half** → stars = `n - i`.

👉 This is the golden key 🔑 (always works).

---

### Step 5: Use `j` for Printing

* Now, inside each row:

  * Run loop `j` from `0` to `stars-1`.
  * Print `"*"` in each loop.

---

# 🧠 Universal Shortcut (for your brain)

Think like this:

1. “Am I in the first half?” → stars = `i+1`.
2. “Am I in the second half?” → stars = `n-i`.
3. Run `j` that many times.

That’s it. 🎯

---

# 🔑 How to Dry Run (Quick Checklist)

When you see such a problem:

1. Write `n`.
2. Write rows `0 → n-1`.
3. Mark the **middle**.
4. For each row, decide: **stars = i+1 OR n-i**.
5. Run `j` from `0 → stars-1`.
6. Write stars.

---

# 🌸 Example Thought Flow (n=7, odd)

* Middle = `ceil(7/2) = 4`.
* Row 0 → stars = 1
* Row 1 → stars = 2
* Row 2 → stars = 3
* Row 3 → stars = 4 (middle peak)
* Row 4 → stars = 3
* Row 5 → stars = 2
* Row 6 → stars = 1

Output:

```
*
**
***
****
***
**
*
```

---

# 🌸 Example Thought Flow (n=8, even)

* Middle = `ceil(8/2) = 4`.
* Row 0 → stars = 1
* Row 1 → stars = 2
* Row 2 → stars = 3
* Row 3 → stars = 4 (first middle row)
* Row 4 → stars = 4 (second middle row)
* Row 5 → stars = 3
* Row 6 → stars = 2
* Row 7 → stars = 1

Output:

```
*
**
***
****
****
***
**
*
```

---
Perfect 🌟 Let’s make your **one-page universal cheat sheet** for this type of star pattern (increasing + decreasing without spaces).

---

# ⭐ Universal Star Pattern Cheat Sheet (Increasing + Decreasing, No Spaces)

### Step 1: Total Rows

* Given → `n` (total rows).
* Rows run from `0 → n-1`.

---

### Step 2: Find Middle

* Middle = `ceil(n/2)`
* Odd `n` → one middle row (peak).
* Even `n` → two middle rows (plateau).

---

### Step 3: Split into Two Halves

* If `i < middle` → row is in **growing part**.
* If `i >= middle` → row is in **shrinking part**.

---

### Step 4: Stars Formula

* Growing half → stars = `i + 1`.
* Shrinking half → stars = `n - i`.

---

### Step 5: Inner Loop (j)

* Run `j` from `0 → stars-1`.
* Print `"*"` for each `j`.

---

## 🔑 Summary Table (Always Works)

| Case      | Condition on `i` | Formula for stars | Inner loop condition |
| --------- | ---------------- | ----------------- | -------------------- |
| Growing   | `i < ceil(n/2)`  | `i + 1`           | `j < i+1`            |
| Shrinking | `i >= ceil(n/2)` | `n - i`           | `j < n-i`            |

---

## 🧠 Shortcut Thought Flow (Like a Mind Map)

```
n → find middle (ceil(n/2))
       ↓
Is row i < middle? → Yes → stars = i+1
       ↓ No
stars = n-i
       ↓
Loop j from 0 to stars-1 → print "*"
```

---

## Example (Odd n=5)

```
i=0 → 1 star
i=1 → 2 stars
i=2 → 3 stars
i=3 → 2 stars
i=4 → 1 star
```

## Example (Even n=6)

```
i=0 → 1 star
i=1 → 2 stars
i=2 → 3 stars
i=3 → 3 stars
i=4 → 2 stars
i=5 → 1 star
```
---


