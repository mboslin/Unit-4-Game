

$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)

    var num1 = Math.floor(Math.random() * 11 + 1)

    var num2 = Math.floor(Math.random() * 11 + 1)

    var num3 = Math.floor(Math.random() * 11 + 1)

    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

}