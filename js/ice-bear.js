// make main game constructor
//     game state running parameter
//      current attempt number parameter 

// render the five dice in <ul>

// Present the poem


//game setup: dice[] is a list of the dice, bears, fish, plankton and holes are the game variables.
var dice = [];
var bears = 0;
var fish = 0;
var plankton = 0;
var holes = 0;
for (var i = 0; i < 5; i++) {
  dice[i]=Math.floor(Math.random()*6 +1);
  switch (dice[i]) {

    case 1:
    fish+=6;
    holes+=1;
    break;

    case 2:
    fish+=5;
    break;

    case 3:
    bears+=2;
    plankton+=14;
    holes+=1;
    break;

    case 4:
    fish+=3;
    break;

    case 5:
    bears+=4
    plankton+=14
    holes+=1
    break;

    default:
    fish +=1
  }
};
console.log(dice);
console.log("b", bears, "f", fish, "p", plankton, "h", holes);

