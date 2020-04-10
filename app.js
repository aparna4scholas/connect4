
var player = 1; // assign value to palyer 1
document.getElementById("currentplayer").innerHTML = player+" "; //get element id from html

var data =         // data with multidimensional array
[
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
] // array with 6 rows 7 columns
console.table(data);   // in console we can see modified data
function clickMe(elementId,tblrow,tblcol){   //clickMe 
    //alert(elementId); // 
    //let col = elementId % 10 - 1;  // to choose array index
    let row = getNextAvailableRow(tblcol); 
    
    data[row][tblcol] = player; // multidimensional array with row and column

    let elementposition = 'circle_'+(row)+(tblcol); //
    if(player == 1)
       document.getElementById(elementposition).style.backgroundColor = "red";  
       else
       document.getElementById(elementposition).style.backgroundColor = "yellow";
     
       if(player == 1){ // players are switching
           player =2;
       }else{
           player =1;
       }
       document.getElementById("currentplayer").innerHTML = player;

   console.table(data);

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
 
 

