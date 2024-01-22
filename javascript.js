var with_computer=false;
var randon
function computer(){
  if (document.getElementById("com").checked){
    with_computer=true;
  }
  else{
    with_computer=false; 
  }
}
function AutoTurn(){
  var freeplaces=[];
  for (let i=0;i<9;i++){
    if (x_moves[i]==0 && o_moves[i]==0){
      freeplaces.push(i);
    }
  }
  console.log(freeplaces);
}
function generateGame() {
  computer();
  x_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  o_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counter = 0
  var box = 0
  alert("welcome to tic tac toe!!! ");
  var div = document.getElementById("game-board");
  div.innerHTML = ``
  for (let i = 0; i < 3; i++) {
    var uu = document.createElement("br");
    div.appendChild(uu);
    for (let i = 0; i < 3; i++) {
      var button = document.createElement("input");
      button.setAttribute("type", "button");
      button.setAttribute("class", "grid-cell");
      button.setAttribute("onclick", "markCheck(this)");
      button.setAttribute("value", " ");
      div.appendChild(button);
      button.setAttribute("id", box);
      box = box + 1;


    }
  }
}


var x_score = 0
var o_score = 0
var pick = "x"
var counter = 0
var x_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var o_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winning_situation = [
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0]];




function IsWinning(winning_situation, moves) {
  var clean = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 9; j++) {
      clean[j] = winning_situation[i][j] * moves[j]
    }
    var pattern_ok = true;
    for (let j = 0; j < 9; j++) {
      if (clean[j] != winning_situation[i][j]) {
        pattern_ok = false;
        break;
      }
    }
    if (pattern_ok == true) {
      alert("victory")
      let mySound = new Audio('goodresult-82807.mp3')
      mySound.play()
      return true
    }
  }
  return false
}




function markCheck(obj) {
  AutoTurn();
  counter = counter + 1;
  var draw = false;
  obj.setAttribute("disabled", "disabled");
  if (pick == "x") {
    obj.setAttribute("value", "x");
    obj.setAttribute("class", "green-player");
    pick = "o";
    console.log("player x marked " + obj.id);
    x_moves[obj.id] = 1;
    if (draw = IsWinning(winning_situation, x_moves)) {
      alert("player x won good job!!!")
      x_score++
      document.getElementById("x").innerText="X_score:"+x_score
      Endgame()
    }



  }
  else if (pick == "o") {
    obj.setAttribute("value", "o");
    obj.setAttribute("class", "red-player");
    pick = "x";
    console.log("player o merked " + obj.id);
    o_moves[obj.id] = 1;
    if (draw = IsWinning(winning_situation, o_moves)) {
      alert("player o won good job!!!")
      o_score++
      document.getElementById("o").innerText="O_score:"+o_score
      Endgame()
    }



  }
  if (counter == 9 && draw == false) {
    alert("draw");
    Endgame();
    console.log("o_moves:");
    console.log(o_moves);
    console.log("x_moves: ");
    console.log(x_moves);

  }

}


function Endgame() {
  for (var r = 0; r < 9; r++) {
    document.getElementById(r).setAttribute("disabled", "disabled");
  }

}

function restart() {
  alert("i am in");
  x_score = 0
  o_score = 0
  document.getElementById("x").innerText="X_score:0"
  document.getElementById("o").innerText="O_score:0"
}