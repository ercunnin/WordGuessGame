
var $ = function(id) {
    return document.getElementById(id);
}


//my array
var names = ["Dwight", "Jim", "Michael", "Stanley", "Phylis", "Pam", "Oscar", "Andy", "Kevin", "Angela", "Creed", "Ryan", "Kelly", "Toby", "Meredith"]
var choice = Math.floor(Math.Random()*15);
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var attemptsLeft= 8;
var output="";
var userLetter="";
var setup = function(){
    for (var i=0; i< answer.length; i++)
{
display[i] = "_ ";
output = output + display[i];
}
document.getElementById("game").innerHTML = output;
output = "";
}
var submit = function(){
    output = "";
    userLetter=$("letter").value;
    $("letter").value ="";
}
