// document.addEventListener("DOMContentLoaded", function(){
//     var span = document.getElementsByTagName('span');
//     var readout = document.getElementById('readout');
//     var spanVariable = span.innerText;
//     console.log(span);
//     var keys = document.getElementById("keys");

//     keys.addEventListener("click", function(evt)  {
//         if(evt.target.tagName === "SPAN") {
//             console.log(evt.target.id);
//             console.log
//         }
//     });
 
// })

$(document).ready(function(){
    $('span').on('click', displayChar);
    $('span').on('mouseover', addHighlight);
    $('span').on('mouseleave', removeHighlight);




})
var mathArray = [];
function displayChar(){
    var chara = $(this).text();
    var id = $(this).attr('id')
    if($.isNumeric(chara) || chara == "."){
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
    else if (id == 'add', 'subtract', 'multiply', 'divide'){
        $('#readout').text(chara);
        mathArray.push(chara)
        console.log('it worked');
    } 
    else {
        console.log('not a num');
    }
    console.log(mathArray);
}
var operators = ['+', '-', '*', '/'];

//function for =, runs math (which is in array?) then displays onj #readout

function compute(){
    var mathString = mathArray.join(" ");
    console.log(mathString);
    var equate = eval(mathString);
    console.log(equate);
    $('#readout').text(equate);
}

//highlight buttons
function addHighlight() {
    $(this).addClass('highlightButtons');
}
function removeHighlight() {
    $(this).removeClass('highlightButtons');
}
