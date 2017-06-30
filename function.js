$(document).ready(function(){
    $('span').on('click', displayChar);
    $('span').on('mouseover', addHighlight);
    $('span').on('mouseleave', removeHighlight);


})
var mathArray = [];

function displayChar(){
    var chara = $(this).text();
    var id = $(this).attr('id')
        if ($.isNumeric(chara) || chara == "."){
            $('#readout').append(chara);
            mathArray.push(chara);
            console.log('numeric');
            console.log(chara)
        } 
        else if (chara == "c") {
            $('#readout').empty();
            mathArray.length = 0;
        } 
        else if (id == "result"){
            compute();
            console.log('am end');
        }
        else if (id == 'multiply', 'divide', 'add', 'subtract'){
            $('#readout').text(chara);
            mathArray.push(chara)
            console.log(id);
        } 
        else {
            console.log('not a num');
        }
        console.log(mathArray);
 }

// var operators = ['+', '-', '*', '/'];

//function for =, runs math (which is in array?) then displays onj #readout

function compute(){
    var mathString = mathArray.join("");
    console.log(mathString);
    var equate = eval(mathString);
    console.log(equate);
    $('#readout').text(equate);
    mathArray = [];
}

//highlight buttons
function addHighlight() {
    $(this).addClass('highlightButtons');
}
function removeHighlight() {
    $(this).removeClass('highlightButtons');
}
