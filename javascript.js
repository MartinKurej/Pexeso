var array = ["A","A","B","B","C","C","E","E","F","F","G","G","H","H","J","J"];
var values = [];
var ids = [];
var flipped = 0;
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
    tiles_flipped = 0;
    var output = '';
    array.shuffle();
    for(var i = 0; i < array.length; i++){
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+array[i]+'\')"></div>';
    }
    document.getElementById('board').innerHTML = output;
}

function memoryFlipTile(tile,val){
    if(tile.innerHTML == "" && values.length < 2){
        tile.style.background = '#FFF';
        tile.innerHTML = val;
      if(values.length == 0){
            values.push(val);
            ids.push(tile.id);
        } else if(values.length == 1){
            values.push(val);
            ids.push(tile.id);
      if(values[0] == values[1]){
                tiles_flipped += 2;
            
                values = [];
                ids = [];
                
      if(tiles_flipped == array.length){
   alert("Chceš hrát znovu?");
                    document.getElementById('board').innerHTML = "";

newBoard();
  }  } else {
       function flip2Back(){
                
 var tile_1 = document.getElementById(ids[0]);
 var tile_2 = document.getElementById(ids[1]);
                  
    tile_1.innerHTML = "";
    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
    tile_2.innerHTML = ""; 
    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
       values = [];
       ids = [];
                }
                setTimeout(flip2Back, 800);
            }}}}
