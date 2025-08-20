//Step 1 → Type A (j doesn’t depend on i → fixed stars per row)

/*
1.

*****
*****
*****
*****
*****

*/
let n=5;
for(let i =0; i<n; i++){
    let row = ""
    for(let j =0; j<n; j++){
        row = row + "*";
    }
    console.log(row);
}

/*
2.

**
**
**
**
**

*/
for(let i =0; i<n; i++){
    let row = "";
    for(let j =0; j<2; j++){
        row = row+"*";
    }
    console.log(row);
}

/*
3.

*******
*******
*******

*/
for(let i =0; i<3 ; i++){
    let row = "";
    for(let j = 0; j<7; j++){
        row = row+"*";
    }
    console.log(row);
}


/*
4.

*
*
*
*

*/

for(let i= 0; i<4; i++){
    console.log("*");
}
/*
5.

**********
**********

*/
for(let i= 0; i<2; i++){
    let row= "";
    for(let j= 0; j<10; j++){
        row= row+"*";
    }
    console.log(row);
}