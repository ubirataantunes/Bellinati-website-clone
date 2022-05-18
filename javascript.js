let btnmenu = document.querySelector("#btnmenu");
let menu = document.querySelector(".menu-header");
var x = 0;
let contato = document.querySelector(".contato");
let sublista = document.querySelector(".sublista");
var y = 0;


btnmenu.addEventListener("click", function() {
    ativarmenu();
});

function ativarmenu() {
    if (x == 0) {
        menu.style = "display: flex;";
        x++;
    } else {
        menu.style = "display: none;";
        x--;
    }
}



contato.addEventListener("click", function() {
    ativarcontato();
});

function ativarcontato() {
    if (y == 0) {
        sublista.style = "display: flex;";
        y++;
    } else {
        sublista.style = "display: none;";
        y--;
    }
}