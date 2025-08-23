
# Star Pattern Master Cheat-Sheet

| Pattern Type                               | Formula for Stars (`j` loop)                 | Example (n = 5)                                                         | Notes / Thinking                                                                   |
| ------------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Type A → Fixed stars**                   | `for(j = 0; j < fixed; j++)`                 | `*****` <br>`*****` <br>`*****`                                         | Each row same stars, j doesn’t depend on i                                         |
| **Type B → Increasing (i dependent)**      | `for(j = 0; j <= i; j++)`                    | `*` <br>`**` <br>`***` <br>`****`                                       | Stars increase with row number                                                     |
| **Type B → Decreasing (n-i)**              | `for(j = 0; j < n - i; j++)`                 | `*****` <br>`****` <br>`***` <br>`**` <br>`*`                           | Stars decrease as row number increases                                             |
| **Odd Symmetry → Increase then Decrease**  | `for(j = 0; j < (i < mid ? i+1 : n-i); j++)` | `*` <br>`**` <br>`***` <br>`**` <br>`*`                                 | Split rows at middle (`mid = Math.ceil(n/2)`), first half `i+1`, second half `n-i` |
| **Even Symmetry → Increase then Decrease** | `for(j = 0; j < (i < mid ? i+1 : n-i); j++)` | `*` <br>`**` <br>`***` <br>`****` <br>`****` <br>`***` <br>`**` <br>`*` | Similar to odd symmetry but **peak repeats** if n even                             |
| **Mixed / Custom**                         | `combine formulas above`                     | Depends on pattern                                                      | Analyze the pattern: **Count stars row-wise** → decide formula → write loop        |

---

## 🧠 Thinking Process for Any Pattern

1. **Count rows (n)** → How many total rows?
2. **Check stars per row** → Is it fixed, increasing, decreasing, or symmetric?
3. **Decide `j` formula**:

   * Fixed → constant
   * Increasing → `i+1`
   * Decreasing → `n-i`
   * Symmetric → split at middle → use `i+1` for first half, `n-i` for second half
4. **Implement nested loop**:

```javascript
for(let i = 0; i < n; i++) {
    let row = "";
    let stars = ...; // use formula above
    for(let j = 0; j < stars; j++) {
        row += "*";
    }
    console.log(row);
}
```

5. **Visual check** → Count stars row by row, adjust formula if needed.

---

✅ Using this cheat-sheet, you can now **look at any beginner star pattern** and immediately write the correct nested loop.
You’ll never have to guess `j` again — **your thinking will be cemented**.

---

If you want, I can also make a **single JS template file** where you just **change the formula for `stars`** for all 25+ patterns we created, so you can **practice by copy-paste** without writing loops again and again.

Do you want me to make that?
