//  Mixed Challenges
/*
1.

*****
****
***
**
*
*
**
***
****
*****

*/
{
    let n=5;
    let row = 2*n;
    for(let i=0; i<row; i++){
        let star = "";
        let count = (i<n)? n-i : i-n+1;
        for(let j=0; j<count; j++){
            star = star + "*";
        }
        console.log(star);
    }
}

/*
2.

****
***
**
*
****
***
**
*

*/

{
    let n=4;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-i; j++){
            row = row + "*";
        }
        console.log(row);
    }
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-i; j++){
            row = row + "*";
        }
        console.log(row);
    }

}

// potimize solution without DRY(don't repeat yourself)

{
    let n=4;
    for(let i=0; i < 2*4; i++){
        let row = "";
        let star = (i<n) ? n-i : n-(i-n)
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

/*
3.

*******
******
*****
****
***
**
*
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
    for(let i=0; i<n*2; i++){
        let row = "";
        let star = (i<n) ? n-i : i-n+1;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);

    }

}
/*
4.

*****
*****
****
****
***
***
**
**
*
*

*/
console.log("check")
{

}
/*
5.

*
**
***
****
*****
****
***
**
*

*/

{
    let n=9;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i<Math.ceil(n/2)) ? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}
