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
    //create



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
    $('#dice-place').children().remove();
    for (var i = 0; i < 5; i++) {
        console.log(play.dice[i]);
    $('#dice-place').append('<img class=\"dice\" src=\"' + pix[(play.dice[i])-1].link + '\"/>');
    }
};


var play = new Icebear();
console.log("new game started");
$('#dice-place').children().remove();
$('#dice-place').append('<img class=\"dice\" src=\"images/hiver.png\"/>');
$('.dice').on({'click': function() {
  play.game();
}});