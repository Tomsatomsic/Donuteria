var donut = document.getElementById("donut")
var restaurant = document.getElementById("restaurant")
var inside = document.getElementById("inside")
var kitchen = document.getElementById("kitchen")
var customerlist = document.getElementById("customers")
var welcome = document.getElementById("welcome")
var click = document.getElementById("click")
var guss = document.getElementById("guss")
var kuchyn = document.getElementById("kuchyn")



function Scene() { 
donut.style.display = "none";
restaurant.style.display = "flex";
click.style.display = "flex";
}


function Scene2(){
    inside.style.display = "flex";
    guss.style.display = "flex";
    welcome.style.display = "flex";
    kuchyn.style.display = "flex";
    click.style.display = "none";
    restaurant.style.display="none";
}

function Scene3(){
    kuchyn.style.display = "none";
    welcome.style.display = "none";
    inside.style.display = "none";
    guss.style.display = "none";
    kitchen.style.display = "flex";
}
