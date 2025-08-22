// Decreasing then Increasing

/*
1.

****
***
**
*
**
***
****

*/
{
    let n=4;
    for(let i=0; i<n; i++){
        let row= "";
        for(let j=0; j<n-i; j++){
            row = row + "*";
        }
        console.log(row);
    }
    for(let i=1; i<n; i++){
        let row ="";
        for(let j=0; j<i+1; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

/*
2.

*****
****
***
**
*
**
***
****
*****

*/

{
    let n=5; 
    let row = 2*n-1;
    for(let i=0; i<row ; i++){
        let star = "";
        let count = (i<n) ? n-i : i-n+2;
        for(let j=0; j<count; j++){
            star = star + "*";
        }
        console.log(star);
    }
}

/*
3.

***
**
*
**
***

*/

{
    let n=3;
    let row = 2*n-1;
    for(let i=0; i<row; i++){
        let star = "";
        let count = (i<n)? n-i : i-1;
        for(let j=0; j<count; j++){
            star = star + "*";
        }
        console.log(star);
    }
}

/*
4.

******
*****
****
***
**
*
**
***
****
*****
******

*/

{
    let n=6;
    let row = 2*n-1;
    for(let i=0; i<row; i++){
        let star = "";
        let count = (i<n)? n-i : i-4;
        for(let j=0; j<count; j++){
            star = star + "*";
        }
        console.log(star);
    }
}

/*
5.

*******
******
*****
****
***
**
*
**
***
****
*****
******
*******

*/
{
    let n=7; 
    let row = 2*n-1;
    for(let i=0; i<row; i++){
        let star = "";
        let count = (i<n) ? n-i : i-5;
        for(let j=0; j<count; j++){
            star = star + "*";
        }
        console.log(star);
    }
}


/*
Note=> Final Verdict

1, 2, 3, 4, 5 → All are correct.

Just one small note: in 4 and 5, the adjustment like i-4 and i-5 works, but it’s a bit hard to generalize. A cleaner formula is:

let count = (i < n) ? n-i : i-n+1;


This works for all cases instead of manually -4, -5.
*/