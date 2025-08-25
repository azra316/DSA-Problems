/*

* Type A → fixed stars
* Type B → increasing (`i+1`)
* Type B → decreasing (`n-i`)
* Odd symmetry
* Even symmetry

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
*/

//Q6: 
{
    let n=5;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<i+1; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

//Q11:

{
    let n=5; 
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-i; j++){
            row = row + "*";
        }
        console.log(row);
    } 
}

//Q16:

{
    let n=5;
    for(let i=0; i<n; i++){
        let row = "";
        let stars = (i< Math.ceil(n/2)) ? i+1 : n-i;
        for(let j=0; j<stars; j++){
            row = row + "*";
        }
        console.log(row);
    }
}
//Q22:
console.log('check');
{
    let n=6;
    for(let i=0; i<n; i++){
        let row = "";
        let stars = (i<Math.ceil(n/2)) ? i+1 : n-i;
        for(let j=0; j< stars; j++){
            row = row + "*";
        }
        console.log(row);
    }
    
}