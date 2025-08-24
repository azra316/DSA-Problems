//Ladder 2 → Decreasing Symmetry (Inverted Pyramid)
//Step 1 → Basics
/*
Q1:

*****
 ****
  ***
   **
    *

*/
//1:
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
/*
Q2:

*******
 *****
  ***
   *

*/
//2:

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

//Step 2 → Different Heights
/*
Q3:

******
 *****
  ****
   ***
    **
     *
*/

//3:

{
     let n=6;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " ";
          }
          //stars
          for(let k=0; k< n-i; k++){
               row = row + "*";
          }
          console.log(row)
     }
}

/*
Q4:

*********
 *******
  *****
   ***
    *

*/

//4:

{
     let n=5;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
          row= row + " ";
          }
          //stars
          for(let k=0; k< 9-(2*i); k++){
               row = row + "*";
          }
          console.log(row);
          
     }
}

//Step 3 → Wider Tops
/*
Q5:

********
 *******
  ******
   *****
    ****
     ***
      **
       *

*/  
//5:

{
     let n=8;
     {
          for(let i=0; i<n; i++){
               let row = "";
               //spaces
               for(let j=0; j<i; j++){
                    row = row + " ";
               }
               //stars
               for(let k=0; k<n-i; k++){
                    row = row + "*";
               }
               console.log(row);
          }
     }
}

/*
Q6:

***********
 *********
  *******
   *****
    ***
     *

*/
//6:

{
     let n=6;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " "
          }
          //stars
          for(let k=0; k< 11-(2*i); k++){
               row = row + "*";
          }
          console.log(row);
     }
}

//Step 4 → Pair Practice
/*
Q7:

******
 *****
  ****
   ***
    **
     *

*/
//7:

{
     let n=6;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " "
          }
          //stars
          for(let k=0; k< n-i; k++){
               row = row + "*";
          }
          console.log(row);
     }
}

/*
Q8:

**********
 ********
  ******
   ****
    **

*/
//8:

{
     let n=5;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " "
          }
          //stars
          for(let k=0; k< 10-2*i; k++){
               row = row + "*";
          }
          console.log(row);
     }
}

//Step 5 → Final Challenges
/*
Q9:

***********
 *********
  *******
   *****
    ***
     *

*/

//9:

{
     let n=6;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " "
          }
          //stars
          for(let k=0; k< 11-2*i; k++){
               row = row + "*";
          }
          console.log(row);
     }
}
/*
Q10:

**************
 ************
  **********
   ********
    ******
     ****
      **

*/

//10:

{
     let n=7;
     for(let i=0; i<n; i++){
          let row = "";
          //spaces
          for(let j=0; j<i; j++){
               row = row + " "
          }
          //stars
          for(let k=0; k< 14-2*i; k++){
               row = row + "*";
          }
          console.log(row);
     }
}

















