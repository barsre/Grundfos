// JavaScript Document

var Box1 = document.getElementById("box1");
var Box2 = document.getElementById("box2");
var Box3 = document.getElementById("box3");
var Box4 = document.getElementById("box4");
var Box5 = document.getElementById("box5");
var Box6 = document.getElementById("box6");
var Box7 = document.getElementById("box7");
var Box8 = document.getElementById("box8");
var Box9 = document.getElementById("box9");
var Box10 = document.getElementById("box10");
var Box11 = document.getElementById("box11");
var Box12 = document.getElementById("box12");

function tjek(){
    if (Box1.checked == true){ var tjek1 = 25; } else { var tjek1 = 0; }
    if (Box2.checked == true){ var tjek2 = 25; } else { var tjek2 = 0; }
    if (Box3.checked == true){ var tjek3 = 25; } else { var tjek3 = 0; }
    if (Box4.checked == true){ var tjek4 = 25; } else { var tjek4 = 0; }
    if (Box5.checked == true){ var tjek5 = 25; } else { var tjek5 = 0; }
    if (Box6.checked == true){ var tjek6 = 25; } else { var tjek6 = 0; }
    if (Box7.checked == true){ var tjek7 = 25; } else { var tjek7 = 0; }
    if (Box8.checked == true){ var tjek8 = 25; } else { var tjek8 = 0; }
    if (Box9.checked == true){ var tjek9 = 25; } else { var tjek9 = 0; }
    if (Box10.checked == true){ var tjek10 = 25; } else { var tjek10 = 0; }
    if (Box11.checked == true){ var tjek11 = 25; } else { var tjek11 = 0; }
    if (Box12.checked == true){ var tjek12 = 25; } else { var tjek12 = 0; }
    
    var Xp = tjek1 + tjek2 + tjek3 + tjek4 + tjek5 + tjek6 + tjek7 + tjek8 + tjek9 + tjek10 + tjek11 + tjek12;
    var Procent = Xp
    
    if (Xp > 299){
        document.getElementById("level").innerHTML = "Level 4";
        var Procent = Procent - 300;
    } else if (Xp > 199){
        document.getElementById("level").innerHTML = "Level 3";
        var Procent = Procent - 200;
    } else if (Xp > 99){
        document.getElementById("level").innerHTML = "Level 2";
        var Procent = Procent - 100;
    } else {
        document.getElementById("level").innerHTML = "Level 1";
    }
    
    document.getElementById("xp").innerHTML = Procent + "%";
    
    if (Xp == 300){
        document.getElementById("filled").style.width = "0px";
    } else if (Xp == 275){
        document.getElementById("filled").style.width = "750px";
    } else if (Xp == 250){
        document.getElementById("filled").style.width = "500px";
    } else if (Xp == 225){
        document.getElementById("filled").style.width = "250px";
    } else if (Xp == 200){
        document.getElementById("filled").style.width = "0px";
    } else if (Xp == 175){
        document.getElementById("filled").style.width = "750px";
    } else if (Xp == 150){
        document.getElementById("filled").style.width = "500px";
    } else if (Xp == 125){
        document.getElementById("filled").style.width = "250px";
    } else if (Xp == 100){
        document.getElementById("filled").style.width = "0px";
    } else if (Xp == 75){
        document.getElementById("filled").style.width = "750px";
    } else if (Xp == 50){
        document.getElementById("filled").style.width = "500px";
    } else if (Xp == 25){
        document.getElementById("filled").style.width = "250px";
    } else {
        document.getElementById("filled").style.width = "0px";
    }
}

