/*

Ladder 1 → Increasing Symmetry (Pyramid)
Step 1 → Basics

Q1:

    *
   **
  ***
 ****
*****


Q2:

   *
  ***
 *****
*******

Step 2 → Taller Pyramids

Q3:

     *
    **
   ***
  ****
 *****
******

Q4:

     *
    ***
   *****
  *******
 *********

Step 3 → Wide Base

Q5:

        *
       **
      ***
     ****
    *****
   ******
  *******


Q6:

        *
       ***
      *****
     *******
    *********
   ***********

Step 4 → Double Pyramids (side by side practice)

Q7:

   *
  ***
 *****
*******

Q8:

    *
   ***
  *****
 *******
*********

Step 5 → Final Challenges

Q9:

       *
      **
     ***
    ****
   *****
  ******
 *******
********


Q10:

       *
      ***
     *****
    *******
   *********
  ***********
 *************

*/

//Q1:

{
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    //spaces
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    //star
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

//Q2:

{
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    //spaces
    for (let j = 0; j < n - i - 1; j++) {
      row = row + " ";
    }
    //stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

//Q3:

{
  let n = 6;
  for(let i=0; i<n; i++){
    let row = "";
    //spaces
    for(let j=0; j<(n-i)-1; j++){
        row = row + " ";
    }
    //stars
    for(let k=0; k<i+1; k++){
        row = row + "*";
    }
    console.log(row);
  }
}

//Q4:

{
   let n=5;
   for(let i=0; i<n; i++){
    let row = "";
    //spaces
    for(let j=0; j<(n-i)-1; j++){
        row = row + " ";
    }
    //stars
    for(let k=0; k<(2*i)+1; k++){
        row = row + "*";
    }
    console.log(row);
   } 
}

//Q5:

{
    let n=7;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        for(let k=0; k<i+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}

//Q6:

{
    let n=6;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        //stars
        for(let k=0; k<(2*i)+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}

//Q7:

{
  let n=4;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        //stars
        for(let k=0; k<(2*i)+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}

//Q8:

{
  let n=5;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        //stars
        for(let k=0; k<(2*i)+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}

//Q9:

{
  let n=8;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        //stars
        for(let k=0; k<i+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}
//Q10:

{
  let n=7;
    for(let i=0; i<n; i++){
        let row = "";
        //spaces
        for(let j=0; j<(n-i)-1; j++){
            row = row + " ";
        }
        //stars
        for(let k=0; k<(2*i)+1; k++){
            row = row + "*";
        }
        console.log(row);
    }
}
