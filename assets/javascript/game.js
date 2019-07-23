

$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)

// ^^This selects a random number to be displayed at the start of every round, random numbers between 19-120

    $('#randomNumber').text(Random);

// ^^This Appends a random number to randomNumber ID in the html

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

// ^^Setting up vars for each number which choose random numbers for each jewel, random number between 1-12

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // ^^Setting up variables for the score

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


    
    function reset(){

        Random=Math.floor(Math.random()*101+19);
        console.log(Random)

        $('#randomNumber').text(Random);

        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);

        userTotal= 0;

        $('#finalTotal').text(userTotal);

        } 

// ^^MASTER RESET // RESETS THE GAME!!



function win() {

    alert("You ate your WHEATIES!!! You WIN!!!");
    wins++;
    $('#numberWins').text(wins);
    reset();
}

// ^^Adds the users WINS to the userTotal

function lose() {

    alert("Try Harder next time... You LOSE!!!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}

// ^^Adds the users LOSSES to the userTotal

$('#one').on('click', function () {

    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == Random) {
        win();
    }
    else if (userTotal > Random) {
        lose();
    }
})  

$('#two').on ('click', function(){

    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  

  $('#three').on ('click', function(){

    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  

  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
  }); 

// ^^Sets win/lose conditions for gems 1-4

});