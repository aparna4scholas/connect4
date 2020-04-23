
var player = 1; // assign value to palyer 1
document.getElementById("currentplayer").innerHTML = player+" "; //get element id from html

var data =         // multidimensional array
[
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
] // array with 6 rows 7 columns
console.table(data);   // check   data in table
function clickMe(elementId,tblrow,tblcol){   //clickMe 
    //alert(elementId); // 
    //let col = elementId % 10 - 1;  // to choose array index
    let row = getNextAvailableRow(tblcol); //table row value assigned to table column
    
    data[row][tblcol] = player; // element position value to player

    let elementposition = 'circle_'+(row)+(tblcol); //
    if(player == 1)
       document.getElementById(elementposition).style.backgroundColor = "red";  
       else
       document.getElementById(elementposition).style.backgroundColor = "yellow";
     
       horizontalLine(player); 
       verticleLine(player);
       //ForwardDiagonal(player);

       if(player == 1){ // players are switching
           player =2;
       }else{
           player =1;
       }
       document.getElementById("currentplayer").innerHTML = player;

   //console.table(data);

}

function getNextAvailableRow(col){
   //alert('dddd');
  for(let row=5;row>=0;row--){
      if(data[row][col] === 0){
          return row;
      }
  }
  return 0;
   
 }

 function reset1()
 { 
     //alert('reset called');
    for(let row=5;row>=0;row--)
    {
        for (let col=6;col>=0;col--)
        {
            data[row][col] = 0;
            document.getElementById("circle_"+row+col).style.backgroundColor = "white"; 
            
        }
    }
 }
/*pseudo code
horizontal line checking with player
goto first row
start counter
check give number exists or not
if given number exists
counter+1
if not exists 
reset the counter
if counter is more than 4 
exit from the loop.*/

 function horizontalLine(player)
 {  for(row=0;row<=5;row++)
    { let count = 0;

      for( col=0;col<=6;col++)
     {
        if(data[row][col]=== player) 
        {
             counter++;
        }else{
            counter=0;
        }
        if(counter == 4){
            alert('player won '+player);
            reset1();
            return;
        }  
     }
   }
}

/*pseudo code
vertical line checking with player
goto first column
start the counter
check the given number exists or not
if given number exists
counter+1
if not 
reset the counter
if counter value is more than 4
exit from the loop.*/




 function verticleLine(player)
 {  for(col=0;col<=6;col++)
    { 
          let count = 0;
  
        for( row=0;row<=5;row++)
       {
          if(data[row][col]=== player) 
          {
               counter++;
          }else
          {
              counter=0;
          }
          if(counter == 4)
          {
              alert('player won '+player);
              reset1();
              return;
           }  
        }
    }
   }

   /*function ForwardDiagonal(player)
   { 
      alert('forwardDiagonal is called');
       for(row=0;row<=5;row++)
       {
           let count=0;
               for(col=0;col<=6;col++)
               {
                  console.log('row,col,value'+row+','+'col,'+data[row][col]); 

               }
           
       }
   }

                //console.log('row,col,value'+row+','+'col,'+data[row][col]); 

                  //if(data[row][col] === player)
                  // {
                    //data[row][col]= data[row+1][col+1];
                    console.log(data[row][col]);
                    //counter++;
                   //}
                   //if(counter == 4)
                 //{
                      //alert('player won '+player);
                      //reset1();
                      //return;
                 //}  
*/