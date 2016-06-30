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