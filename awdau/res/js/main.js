var donut = document.getElementById("donut")
var restaurant = document.getElementById("restaurant")
var inside = document.getElementById("inside")
var kitchen = document.getElementById("kitchen")
var customerlist = document.getElementById("customers")
var welcome = document.getElementById("welcome")
var click = document.getElementById("click")
var guss = document.getElementById("guss")
var kuchyn = document.getElementById("kuchyn")
var back = document.getElementById("back")
var toilets = document.getElementById("toilets")
var toilet = document.getElementById("toilet")
var doughnut = document.getElementById("doughnut")
var candystar = document.getElementById("candystar")
var sprinkles = document.getElementById("sprinkles")
var nutella = document.getElementById("nutella")
var marmelade = document.getElementById("marmelade")


let doughnuts = 0;
let sprinkle = 0;
let candystars = 0;
let nutellas = 0;
let marmelades = 0;

function Scene() { 
donut.style.display = "none";
restaurant.style.display = "flex";
click.style.display = "flex";
}


function Scene2(){
    toilets.style.display = "flex"; 
    inside.style.display = "flex";
    guss.style.display = "flex";
    welcome.style.display = "flex";
    kuchyn.style.display = "flex";
    click.style.display = "none";
    restaurant.style.display="none";
}

function Scene3(){
    marmelade.style.display = "flex";
    candystar.style.display = "flex";
    nutella.style.display = "flex";
    sprinkles.style.display = "flex";
    doughnut.style.display = "flex";
    kitchen.style.display = "flex";
    back.style.display = "flex";
    kuchyn.style.display = "none";
    welcome.style.display = "none";
    inside.style.display = "none";
    guss.style.display = "none";
    toilets.style.display = "none";
}

function Back(){
    toilets.style.display = "flex";
    inside.style.display = "flex";
    guss.style.display = "flex";
    welcome.style.display = "flex";
    kuchyn.style.display = "flex";
kitchen.style.display = "none";
}

function Scene4(){
    toilet.style.display = "flex";
    back.style.display = "flex";
    toilets.style.display = "none";
    kuchyn.style.display = "none";
    welcome.style.display = "none";
    inside.style.display = "none";
    guss.style.display = "none";
}

function dugnut() {
doughnuts++;
}
