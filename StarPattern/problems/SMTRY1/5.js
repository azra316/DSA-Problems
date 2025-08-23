// Increasing + Decreasing (Even Case)
//  Symmetry (Even Peaks)
/*
1.

*
**
**
*

*/
{
    let n=4;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i<Math.ceil(n/2)) ? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

/*
2.

*
**
***
***
**
*

*/

{
    let n=6;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i< Math.ceil(n/2)) ? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}

/*
3.

*
**
***
****
****
***
**
*

*/

{
    let n= 8;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i<Math.ceil(n/2))? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row +"*";
        }
        console.log(row);
    }
}

/*

4.

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

*/

{
    let n=10;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i<Math.ceil(n/2))? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}


/*
5.

*
**
***
****
*****
******
******
*****
****
***
**
*

*/

{
    let n=12;
    for(let i=0; i<n; i++){
        let row = "";
        let star = (i<Math.ceil(n/2))? i+1 : n-i;
        for(let j=0; j<star; j++){
            row = row + "*";
        }
        console.log(row);
    }
}