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
var dunut = document.getElementById("dunut")
var candydonut = document.getElementById("candydonut")
var sprinkledonut = document.getElementById("sprinkledonut")
var nutelladonut = document.getElementById("nutelladonut")
var kobliha = document.getElementById("kobliha")
var serve = document.getElementById("serve")
var coinss = document.getElementById("coinss")
var coiners = document.getElementById("coins")






function Scene() { 
donut.style.display = "none";
restaurant.style.display = "flex";
click.style.display = "flex";
}


function Scene2(){
    coinss.style.display = "flex";
    coiners.style.display = "flex";
    toilets.style.display = "flex"; 
    inside.style.display = "flex";
    guss.style.display = "flex";
    welcome.style.display = "flex";
    kuchyn.style.display = "flex";
    click.style.display = "none";
    restaurant.style.display="none";
    toilet.style.display = "none";
    kitchen.style.display = "none";
}

function Scene3(){
    marmelade.style.display = "flex";
    nutella.style.display = "flex";
    sprinkles.style.display = "flex";
    doughnut.style.display = "flex"
    kuchyn.style.display = "none";
    welcome.style.display = "none";
    inside.style.display = "none";
    guss.style.display = "none";
    toilets.style.display = "none";
    kitchen.style.display = "flex";
    coinss.style.display = "flex";
    coiners.style.display = "flex";
    back.style.display = "flex";
    kitchen.style.display = "flex";
    serve.style.display = "flex";
}

function Back(){
    toilets.style.display = "flex";
    inside.style.display = "flex";
    guss.style.display = "flex";
    welcome.style.display = "flex";
    kuchyn.style.display = "flex"; 
    sprinkledonut.style.display = "none";
    nutelladonut.style.display = "none";
    kobliha.style.display = "none";
    dunut.style.display = "none";
    marmelade.style.display = "none";
    nutella.style.display = "none";
    sprinkles.style.display = "none";
    doughnut.style.display = "none";
    kitchen.style.display = "none";
    back.style.display = "none";
    serve.style.display = "none";
}

function Scene4(){
    marmelade.style.display = "none";
    nutella.style.display = "none";
    sprinkles.style.display = "none";
    doughnut.style.display = "none";
    kitchen.style.display = "none";
    toilet.style.display = "flex";
    back.style.display = "flex";
    toilets.style.display = "none";
    kuchyn.style.display = "none";
    welcome.style.display = "none";
    inside.style.display = "none";
    guss.style.display = "none";
    serve.style.display = "none";
}

function dugnut() {
dunut.style.display = "flex";
   kobliha.style.display = "none";
    sprinkledonut.style.display = "none";
    nutelladonut.style.display = "none";
}


function  koblihos(){
    kobliha.style.display = "flex";
    dunut.style.display = "none";
    sprinkledonut.style.display = "none";
    nutelladonut.style.display = "none";
}
function nutelladonutus(){
    nutelladonut.style.display = "flex";
    kobliha.style.display = "none";
   dunut.style.display = "none";
   sprinkledonut.style.display = "none";
}
function sprinkledonutus(){
    sprinkledonut.style.display = "flex";
    nutelladonut.style.display = "none";
    kobliha.style.display = "none";
    dunut.style.display = "none";
}


let coins = 0;


    function Serve (){
        dunut.style.display = "none";
    sprinkledonut.style.display = "none";
    nutelladonut.style.display = "none";
    kobliha.style.display = "none";
    coins += 1;
    document.getElementById('coins').innerHTML = coins;
    }

