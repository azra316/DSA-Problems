#  Generalized Thinking Process (Pyramid symmetry with spaces)

We always have **two things to print per row**:

1. **Spaces**
2. **Stars**

👉 So, our thought process should always be:

```
Row → Spaces + Stars
```

---

## Step 1: Decide the total rows

* Total rows = `n` (given in question)

---

## Step 2: Find the "middle"

* Middle row is important because first half (increasing) and second half (decreasing) depend on it.
* Formula:

```
if (n is odd) → middle = Math.ceil(n/2)
if (n is even) → middle = Math.floor(n/2)
```

---

## Step 3: Break into two halves

* **Upper half (including middle row)** → stars increase, spaces decrease
* **Lower half** → stars decrease, spaces increase

---

## Step 4: Write loop (start from 0)

We use outer loop for rows (`i` starts from 0).

* If `i < middle` → **upper part**

  * spaces = middle - i - 1
  * stars  = 2 * i + 1

* Else (`i >= middle`) → **lower part**

  * spaces = i - middle + 1
  * stars  = 2 * (n - i) - 1

---

## Step 5: Print each row

* First loop prints spaces (`j` loop from 0 → spaces-1)
* Second loop prints stars (`j` loop from 0 → stars-1)

---

# 🔹 Dry Run Example (n = 7)

So,

```
n = 7
middle = Math.ceil(7/2) = 4
```

| Row (i) | Part  | Spaces | Stars |
| ------- | ----- | ------ | ----- |
| 0       | Upper | 3      | 1     |
| 1       | Upper | 2      | 3     |
| 2       | Upper | 1      | 5     |
| 3       | Upper | 0      | 7     |
| 4       | Lower | 1      | 5     |
| 5       | Lower | 2      | 3     |
| 6       | Lower | 3      | 1     |

👉 Final Output:

```
   *
  ***
 *****
*******
 *****
  ***
   *
```

---

# 🔹 Code (loops start from 0, no repeat method)

```js
let n = 7;
let middle = (n % 2 === 0) ? Math.floor(n/2) : Math.ceil(n/2);

for (let i = 0; i < n; i++) {
    let row = "";

    if (i < middle) {
        // Upper part
        let spaces = middle - i - 1;
        let stars = 2 * i + 1;

        for (let j = 0; j < spaces; j++) row += " ";
        for (let j = 0; j < stars; j++) row += "*";

    } else {
        // Lower part
        let spaces = i - middle + 1;
        let stars = 2 * (n - i) - 1;

        for (let j = 0; j < spaces; j++) row += " ";
        for (let j = 0; j < stars; j++) row += "*";
    }

    console.log(row);
}
```

---

✅ So the **generalized thinking process** is:

1. Count total rows = `n`
2. Find `middle`
3. Split into **upper** (i < middle) and **lower** (i >= middle)
4. Formula:

   * Upper → spaces = middle - i - 1, stars = 2 * i + 1
   * Lower → spaces = i - middle + 1, stars = 2 * (n - i) - 1
5. Print row = spaces + stars

---
