/*

Ladder 2 → Decreasing Symmetry (Inverted Pyramid)
Step 1 → Basics

Q1:

*****
 ****
  ***
   **
    *


Q2:

*******
 *****
  ***
   *

Step 2 → Different Heights

Q3:

******
 *****
  ****
   ***
    **
     *


Q4:

*********
 *******
  *****
   ***
    *

Step 3 → Wider Tops

Q5:

********
 *******
  ******
   *****
    ****
     ***
      **
       *


Q6:

***********
 *********
  *******
   *****
    ***
     *

Step 4 → Pair Practice

Q7:

******
 *****
  ****
   ***
    **
     *


Q8:

**********
 ********
  ******
   ****
    **

Step 5 → Final Challenges

Q9:

***********
 *********
  *******
   *****
    ***
     *


Q10:

**************
 ************
  **********
   ********
    ******
     ****
      **

*/

//Q1:

{
     let n=5;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i+1; j++){
               row = row + " ";
          }
          for(let k=0; k<n-i; k++){
               row = row + "*";
          }
          console.log(row);
     }
}

//Q2:

{
     let n=4;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " ";
          }
          for(let k=0; k<7-(2*i); k++){
               row = row + "*";
          }
          console.log(row);
     }
}

//Q3:
console.log("check");
{
     
}