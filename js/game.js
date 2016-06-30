var score = 0;
var eggs = 0;
var upgrade = 1;

function clicOnChicken() {
    score = score + upgrade;
    eggs = eggs + upgrade;
    document.getElementById("affichage-score").innerHTML = score;
    document.getElementById("total-eggs").innerHTML = score;
    console.log(score);
}

function buy() {
    if (eggs >= 50) {
        eggs = eggs - 50;
        document.getElementById("affichage-score").innerHTML = eggs;
        upgrade = upgrade + 1;
    } else {
        alert("nop !");
    }
        
}