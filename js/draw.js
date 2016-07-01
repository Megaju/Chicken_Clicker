var dessin = document.getElementById("myFirstCanvas");
var ctx = dessin.getContext("2d");
// fillStyle pour un style remplie
// CONTRAIRE = strokeStyle !

// couleur de fond
ctx.fillStyle = "#579";
// dessiner un rectangle (posX, posY, Width, Heigh)
ctx.fillRect(100, 50, 100, 100);





// dessiner une ligne
var dessin = document.getElementById("myLine");
var ctx = dessin.getContext("2d");
// couleur de la ligne
ctx.strokeStyle = "#eee";
// postion X Y
ctx.moveTo(100,100);
// taille - angle
ctx.lineTo(200,100);
ctx.stroke();





// dessiner un rond
var dessin = document.getElementById("myCircle");
var ctx = dessin.getContext("2d");
// on va commencer le tracé d'un chamin avec beginPath
ctx.beginPath();
// posX, posY, Rayon, Ouverture, pi  
ctx.arc(150,100,80,0,2*Math.PI);
// ici on peut mettre stroke ou fill :)
ctx.fill();




// dessiner du texte
var dessin = document.getElementById("myText");
var ctx = dessin.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",75,100);