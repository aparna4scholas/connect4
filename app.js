

var player = 1;
document.getElementById("currentplayer").innerHTML = player+"";

var data = 
[
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
] // array created with 7 rows and 7 columns
console.table(data); // consolelog on browser we can see modified data in table format
function hitme(elementId){ // clickon element function
    // alert(elementId);
    let col = elementId % 10 - 1;   // if element id is 11.(11%10 -1) will execute and get the remaining value as a column .
    let row = getNextAvailableRow(col);
    
    data[row][col] = player; // multidimensional array

    let elementposition = ''+(row+1)+(col+1); // for element position we want row value and column value.
    if(player == 1) //  switching players
       document.getElementById(elementposition).style.backgroundColor = "red";  
       else
       document.getElementById(elementposition).style.backgroundColor = "yellow";
     
       if(player == 1){
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
