/*

* Type A → fixed stars
* Type B → increasing (`i+1`)
* Type B → decreasing (`n-i`)
* Odd symmetry
* Even symmetry

I’ll structure it like an **exam**: **instructions + 25 questions** (like our ladder: 5 steps × 5 levels).
You’ll **write JS code for each pattern**, then check your output.

---

# 🌟 Beginner Star Pattern Test Paper

**Instructions:**

1. Solve all 25 questions using **nested loops** in JavaScript.
2. Don’t use spaces. Only stars `*`.
3. For each pattern, **write the loop** and **print row by row**.
4. Check your output carefully — count stars row by row.
5. You **cannot look at answers while solving**.

---

## 🔹 Step 1 → Type A (Fixed Stars)

**Q1:**

```
*****
*****
*****
*****
*****
```

**Q2:**

```
**
**
**
**
**
```

**Q3:**

```
*******
*******
*******
```

**Q4:**

```
*
*
*
*
```

**Q5:**

```
**********
**********
```

---

## 🔹 Step 2 → Type B (Increasing Stars)

**Q6:**

```
*
**
***
****
*****
```

**Q7:**

```
*
**
***
```

**Q8:**

```
*
**
***
****
```

**Q9:**

```
*
**
***
****
*****
******
```

**Q10:**

```
*
**
***
****
*****
******
*******
```

---

## 🔹 Step 3 → Type B (`n - i` → Decreasing Stars)

**Q11:**

```
*****
****
***
**
*
```

**Q12:**

```
****
***
**
*
```

**Q13:**

```
***
**
*
```

**Q14:**

```
******
*****
****
***
**
*
```

**Q15:**

```
*******
******
*****
****
***
**
*
```

---

## 🔹 Step 4 → Odd Symmetry (Increase then Decrease)

**Q16:**

```
*
**
***
**
*
```

**Q17:**

```
*
**
***
****
***
**
*
```

**Q18:**

```
*
**
***
****
*****
****
***
**
*
```

**Q19:**

```
*
**
***
****
*****
******
*****
****
***
**
*
```

**Q20:**

```
*
**
***
****
*****
******
*******
******
*****
****
***
**
*
```

---

## 🔹 Step 5 → Even Symmetry (Increase then Decrease with Peak Repeat)

**Q21:**

```
*
**
**
*
```

**Q22:**

```
*
**
***
***
**
*
```

**Q23:**

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

**Q24:**

```
*
**
***
****
*****
*****
****
***
**
*
```

**Q25:**

```
**
***
****
****
***
**
```

---

### ✅ How to Self-Check

1. For each pattern, **count rows and stars per row**.
2. Check your loop formulas:

   * Fixed → constant
   * Increasing → `i+1`
   * Decreasing → `n-i`
   * Odd symmetry → split at middle (`i+1` then `n-i`)
   * Even symmetry → peak repeats
3. Run your JS code → compare with pattern exactly.
4. If it matches perfectly → mastered that pattern.

---


*/