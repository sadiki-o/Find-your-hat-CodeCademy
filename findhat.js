const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//feild class
class Field {
  constructor(field){
    this.field = field;
  }
  print(){
    for(let i=0; i<this.field.length; i++){
      console.log(this.field[i].join(""));
    }
  }
  
}

//our field 
const myField = new Field([
  ['*', '░','░', 'O'],
  ['░', 'O','░', '░'],
  ['░', '^','░','░'],
]);
myField.print() //printing our field/map

//start playing
var gameState = '';
var i = 0, j = 0;
while (gameState != 'loss' || gameState != 'Win you have found your hat') {
    //current position
    let currentPosition = myField.field[i][j];
    //make move
    let move = prompt("Chose a move : ")
    //test
    if((move == 't' && (i == 0 || myField.field[i-1][j] == hole || myField.field[i-1][j] == pathCharacter))){
        gameState = 'loss';
        break;
    }else if((move == 'l' && (j == 0 || myField.field[i][j-1] == hole || myField.field[i][j-1] == pathCharacter))){
        gameState = 'loss';
        break;
    }else if((move == 'r' && (j == -1 || myField.field[i][j+1] == hole || myField.field[i][j+1] == pathCharacter))){
        gameState = 'loss';
        break;
    }else if((move == 'd' && (i == -1 || myField.field[i+1][j] == hole || myField.field[i+1][j] == pathCharacter))){
        gameState = 'loss';
        break;
    }else if((move == 't' && myField.field[i-1][j] == hat) || (move == 'l' && myField.field[i][j-1] == hat) || (move == 'r' && myField.field[i][j+1] == hat) || (move == 'd' && myField.field[i+1][j] == hat)){
        gameState = "Win you have found your hat";
        break;
    }else if(move == 't' && myField.field[i-1][j] == fieldCharacter){
        myField.field[i-1][j] = pathCharacter;
        console.clear();
        myField.print()
        i -= 1;
    }else if(move == 'l' && myField.field[i][j-1] == fieldCharacter){
        myField.field[i][j-1] = pathCharacter;
        console.clear();
        myField.print()
        j -= 1;
    }else if(move == 'r' && myField.field[i][j+1] == fieldCharacter){
        myField.field[i][j+1] = pathCharacter;
        console.clear();
        myField.print()
        j += 1;
    }else if(move == 'd' && myField.field[i+1][j] == fieldCharacter){
        myField.field[i+1][j] = pathCharacter;
        console.clear();
        myField.print();
        i += 1;
    }
}
console.log(gameState);
