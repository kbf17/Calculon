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
    $('#readout').text("hoi!");
    $('span').on('click', displayChar);




})
var mathArray = [];
function displayChar(){
    var chara = $(this).text();
    var id = $(this).attr('id')
    if($.isNumeric(chara) || chara == "."){
        $('#readout').append(chara);
        mathArray.push(chara);
        console.log('numeric');
    } 
    else if (chara == "c") {
        $('#readout').empty();
        mathArray.length = 0;
    } 
    else if (id == "return"){
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
    var mathString = toString(mathArray);
    // var equate = Math.mathString;
    console.log(mathString);
}