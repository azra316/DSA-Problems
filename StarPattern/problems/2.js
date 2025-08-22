// Type B (j depends on i → increasing stars)
/*
1.

*
**
***
****
*****

*/

for(let i=0; i<5; i++){
    let row="";
    for(let j=0; j<=i; j++){
        row = row+"*";
    }
    console.log(row);
}

/*
2.

*
**
***

*/
for(let i=0 ; i<3; i++){
    let row= "";
    for(let j=0; j<i+1; j++){
        row= row + "*";
    }
    console.log(row);
}

/*

3.

*
**
***
****

*/

for(let i=0 ; i<4; i++){
    let row= "";
    for(let j=0; j<i+1; j++){
        row= row + "*";
    }
    console.log(row);
}

/*
4.

*
**
***
****
*****
******

*/

for(let i=0 ; i<6; i++){
    let row= "";
    for(let j=0; j<=i; j++){
        row= row + "*";
    }
    console.log(row);
}

/*
5.

*
**
***
****
*****
******
*******

*/
for(let i=0 ; i<7; i++){
    let row= "";
    for(let j=0; j<=i; j++){
        row= row + "*";
    }
    console.log(row);
}
