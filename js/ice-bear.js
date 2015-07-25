$.ajax({
  url: 'https://api.imgur.com/3/album/ixfMR/json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 0be6c5892b795ca'
  }
})
.done(function(res) {
  pix = res.data.images;
  console.log(pix);
})
.fail(function(err) {
  console.log(err);
});

var Icebear = function () {
    this.dice = [];
    // if JSON.parse(localStorage.attempts) {
    //     var attempts = JSON.parse(localStorage.attempts);
    // }
    // else var attempts = 0;
};

Icebear.prototype.game = function() {
    console.log("game function initiated");
    this.roll();
    this.renderDice();
    this.iceBearQuestion();



//lose scenario
//attempts += 
//localStorage.attempts = JSON.stringify(attempts)
};

Icebear.prototype.roll = function() {
    var bears = 0;
    var fish = 0;
    var plankton = 0;
    var holes = 0;
    for (var i = 0; i < 5; i++) {
      this.dice[i]=Math.floor(Math.random()*6 +1);
      switch (this.dice[i]) {

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
    }
    this.dice.push(bears,fish,plankton,holes);
    console.log(this.dice);
    console.log("b", bears, "f", fish, "p", plankton, "h", holes);
    return this.dice;
};

Icebear.prototype.renderDice = function() {
    console.log("rendering dice");
    $('.erasable').children().remove();
    for (var i = 0; i < 5; i++) {
        console.log(this.dice[i]);
    $('#dice-place').append('<img class=\"dice\" src=\"' + pix[(this.dice[i])-1].link + '\"/>');
    }
};

Icebear.prototype.iceBearQuestion = function() {
    
    $('#question').append('<h3>How many polar bears do you see? </h3>');
    $('#question').append('<input type ="number" id="answer" required=true></input>');
    $('#question').append('<button type=button id="submit">?</button>');
    // $('#submit').on({'click': 
    //     bears = $('#answer').value
    $('#answer').append('<h2>There are ' + this.dice[5] + 'bears</h2>');
}

var play = new Icebear();
console.log("new game started");
$('.erasable').children().remove();
$('#dice-place').append('<img class=\"dice\" src=\"images/hiver.png\"/>');
$('.dice').on({'click': function() {
  play.game();
}});