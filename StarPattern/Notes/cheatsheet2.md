**spaces in symmetry patterns** like a true teacher — clear, simple, and step by step, so you’ll **never get confused again**.

We’ll treat every **row** as having **two parts**:
👉 **Spaces** + **Stars**

If you know how many **spaces** and how many **stars** in each row → you can code anything.

---

# 🌟 Cheat-Sheet for Spaces in Symmetry Patterns

---

## 🔹 1. Increasing Symmetry → Pyramid

### Example

```
    *
   ***
  *****
 *******
```

### Formula

- **Spaces = n - i - 1**
- **Stars = 2 \* i + 1**
  (where `i` starts from 0 → top row)

### Breakdown

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 0       | 3      | 1     |
| 1       | 2      | 3     |
| 2       | 1      | 5     |
| 3       | 0      | 7     |

✅ You see: spaces decrease, stars increase.

---

## 🔹 2. Decreasing Symmetry → Inverted Pyramid

### Example

```
*******
 *****
  ***
   *
```

### Formula

- **Spaces = i**
- **Stars = 2 \* (n - i) - 1**

### Breakdown

| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 0       | 0      | 7     |
| 1       | 1      | 5     |
| 2       | 2      | 3     |
| 3       | 3      | 1     |

✅ You see: spaces increase, stars decrease.

---

## 🔹 3. Increasing + Decreasing Symmetry → Diamond

### Example

```
   *
  ***
 *****
*******
 *****
  ***
   *
```

### Formula

- Split into **top half** (pyramid) and **bottom half** (inverted pyramid).
- Top (i < n):

  - Spaces = n - i - 1
  - Stars = 2 \* i + 1

- Bottom (i >= n):

  - Spaces = i - n + 1
  - Stars = 2 \* (2n - i - 1) - 1

### Breakdown (n = 4 top half)

| Row | Spaces | Stars |
| --- | ------ | ----- |
| 0   | 3      | 1     |
| 1   | 2      | 3     |
| 2   | 1      | 5     |
| 3   | 0      | 7     |
| 4   | 1      | 5     |
| 5   | 2      | 3     |
| 6   | 3      | 1     |

✅ Top half = Pyramid, bottom half = Inverted Pyramid.

---

## 🔹 4. Decreasing + Increasing Symmetry → Hourglass

### Example

```
*******
 *****
  ***
   *
  ***
 *****
*******
```

### Formula

- Split into **top half** (inverted pyramid) and **bottom half** (pyramid).
- Top (i < n):

  - Spaces = i
  - Stars = 2 \* (n - i) - 1

- Bottom (i >= n):

  - Spaces = n - i - 1
  - Stars = 2 \* (i - n + 1) + 1

### Breakdown (n = 4 top half)

| Row | Spaces | Stars |
| --- | ------ | ----- |
| 0   | 0      | 7     |
| 1   | 1      | 5     |
| 2   | 2      | 3     |
| 3   | 3      | 1     |
| 4   | 2      | 3     |
| 5   | 1      | 5     |
| 6   | 0      | 7     |

✅ Top half = Inverted Pyramid, bottom half = Pyramid.

---

# 🧠 General Thought Process for Spaces + Stars

1. **Look at the shape**: Is it increasing, decreasing, or both?
2. **Count spaces in first row** → formula for spaces.

   - Spaces often follow → **n - i - 1** or just **i**.

3. **Count stars in first row** → formula for stars.

   - Odd stars → `2 * i + 1`
   - Even stars → `2 * (n - i) - 1`

4. If it’s **symmetric (diamond/hourglass)** → just combine two halves (pyramid + inverted pyramid).

---

# 🌟 Universal Template (JavaScript)

```js
for (let i = 0; i < n; i++) {
  let row = "";

  // calculate spaces
  for (let s = 0; s < spaces; s++) {
    row += " ";
  }

  // calculate stars
  for (let j = 0; j < stars; j++) {
    row += "*";
  }

  console.log(row);
}
```

👉 Just plug in formulas for `spaces` and `stars` depending on the pattern type.

---

✅ After this cheat-sheet, you now **own the secret weapon** 💪:

- **Spaces = push stars to the right**
- **Stars = control the height/width**
- Every symmetric pattern = **spaces + stars formula**

---
