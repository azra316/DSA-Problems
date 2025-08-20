//Step 3 → Type B (j depends on i → decreasing stars)

/*
1.
 
*****
****
***
**
*

*/
{
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for(let j=0; j<n-i; j++){
    row = row + "*";

  }
  console.log(row);
}
}

/*
2.
 
****
***
**
*

*/
{
let n=4;
for(let i=0; i<n; i++){
    let row="";
    for(let j=0; j<n-i; j++){
        row =row+"*";
    }
    console.log(row);
}
}
/*
3.

***
**
*

*/

{
    let n=3;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-i; j++){
            row = row+"*";
        }
        console.log(row);
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

*/

{
    let n=6;
    for(let i=0; i<n; i++){
        let row= "";
        for(let j=0; j<n-i; j++){
            row = row+"*";
        }
        console.log(row);
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

*/
{
    let n=7;
    for(let i=0; i<n; i++){
        let row ="";
        for(let j=0; j<n-i; j++){
         row = row+"*"
        }
        console.log(row);
    }
}