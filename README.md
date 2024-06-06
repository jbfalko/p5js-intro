# Introduktion til p5.js

P5.Js er et javascript bibliotek, som gør det let at programmere animationer, bruge webcam m.m. Det findes som en standardskabelon man kan vælge, når man opretter et projekt på replit.com. I introduktionen skal i lave en lille interaktiv tegning.

Den grundlæggende struktur består af to funktioner: 

`setup(){}` afvikles fra programmets start og bruges til at opstille "canvas" - lærredets - størrelse m.m. 

`draw(){}` afvikles som standard 60 gange i sekundet. Her kan figurer tegnes.

I setup bruges typisk:
* `createCanvas(bredde, højde)` opretter lærrede ud fra to parametre for hhv. højde og bredde
* `frameRate(antal)` antal gange per sekund draw() afvikles - standard er 60, men 24 er nok til at skabe animation.
* `background(r,g,b)` tegner farvet firkant i lærredets højde og bredde - dækker for andre figurer, hvis den ikke står først. 
* `windowWidth` returnerer det aktuelle vindues bredde
* `windowHeight` returnerer det aktuelle vindues højde

## Opgaver
1) Ændr canvas højde, så hele vinduet dækkes.
2) Flyt background(100) ned i draw(), så gammel figur skjules.
3) Prøv at sætte frameRate ned - hvad sker der?
4) Ændre farven i background til eks. rød!