// JavaScript Document

var Nr1 = document.getElementById("nr1");
var Nr2 = document.getElementById("nr2");
var Nr3 = document.getElementById("nr3");

var Done = document.getElementById("done");

function toNr2() {
    Nr1.classList.toggle("hidden");
    Nr2.classList.toggle("hidden");
}

function toNr3() {
    Nr2.classList.toggle("hidden");
    Nr3.classList.toggle("hidden");
}

function done() {
    Nr3.classList.toggle("hidden");
    Done.classList.toggle("hidden");
    
    if (document.getElementById("yes1").checked) { var Answer1 = 1; } else { var Answer1 = 0;}
    if (document.getElementById("yes2").checked) { var Answer2 = 1; } else { var Answer2 = 0;}
    if (document.getElementById("yes3").checked) { var Answer3 = 1; } else { var Answer3 = 0;}
    
    var correct = Answer1 + Answer2 + Answer3;
    
    document.getElementById("result").innerHTML = "Du svarede rigtigt på: " + correct + " / 3";
}

function repeat() {
    location.reload();
}