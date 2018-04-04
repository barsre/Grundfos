// JavaScript Document

var FrontPage = document.getElementById("Front");
var HowToPage = document.getElementById("HowTo");
var ProfilePage = document.getElementById("Profile");
var VideoPage = document.getElementById("Video");

function toProfile() {
    'use strict';
    HowToPage.classList.toggle("d-none");
    ProfilePage.classList.toggle("d-none");
}

function toVideo() {
    'use strict';
    FrontPage.classList.add("d-none");
    VideoPage.classList.remove("d-none");
}

function toFront() {
    'use strict';
    VideoPage.classList.add("d-none");
    FrontPage.classList.remove("d-none");
    ProfilePage.classList.add("d-none");
    HowToPage.classList.remove("d-none");
}