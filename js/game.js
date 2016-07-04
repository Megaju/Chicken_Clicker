var score = 0;
var eggs = 0;
var upgrade = 1;
var prix = 50;
//var autoclicker = 200;

function clicOnChicken() {
    score = score + upgrade;
    eggs = eggs + upgrade;
    document.getElementById("affichage-score").innerHTML = eggs;
    document.getElementById("total-eggs").innerHTML = score;
    console.log(eggs);
}

function buy() {
    if (eggs >= prix) {
        eggs = eggs - prix;
        document.getElementById("affichage-score").innerHTML = eggs;        
        upgrade = upgrade + 1;
        document.getElementById("nbr-multi").innerHTML = upgrade;
        prix = prix * 2;
        document.getElementById("price").innerHTML = prix;
 //       autoclicker = setInterval(clicOnChicken, 1000);
    } else {
        alert("nop !");
    }
}
