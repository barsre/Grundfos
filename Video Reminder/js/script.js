// JavaScript Document

var Video = "video"
var Video1 = "Det her er Video nr. 1"
var Video2 = "Det her er Video nr. 2"
var Video3 = "Det her er Video nr. 3"

if (localStorage.getItem(Video) == Video1){
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("box").style.backgroundColor = "blue";
} else if (localStorage.getItem(Video) == Video2){
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("box").style.backgroundColor = "yellow";
} else if (localStorage.getItem(Video) == Video3){
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("box").style.backgroundColor = "red";
}

function video1(){
    localStorage.setItem(Video, Video1);
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("box").style.backgroundColor = "blue";
}

function video2(){
    localStorage.setItem(Video, Video2);
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("box").style.backgroundColor = "yellow";
}

function video3(){
    localStorage.setItem(Video, Video3);
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("videobox").classList.remove("hidden");
    document.getElementById("box").style.backgroundColor = "red";
}

function done(){
    localStorage.clear();
    document.getElementById("text").innerHTML = localStorage.getItem(Video);
    document.getElementById("videobox").classList.add("hidden");
}