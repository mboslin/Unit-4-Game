

$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)

    var num1 = Math.floor(Math.random() * 11 + 1)

    var num2 = Math.floor(Math.random() * 11 + 1)

    var num3 = Math.floor(Math.random() * 11 + 1)

    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

}

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


function win() {

    alert("You are so SMART!! You WON!");
    wins++;

    $('#numberWins').text(wins);
    reset();
}


function lose() {

    alert("Try Harder next time.. You LOSE!");
    losses++;

    $('#numberLosses').text(losses);
    reset()
}


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

}