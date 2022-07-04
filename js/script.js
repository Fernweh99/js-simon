/*
Consegna:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Recupero elementi dal DOM
const divCountdown = document.getElementById('display-countdown');
const divRandomNumber = document.getElementById('display-rand-number');

// Funzioni
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// creo cose utili per generare i numeri random
const indexOfNumbers = 5;
const gameNumbers = [];
let textFinal = "";

// eseguo un for per creare tot(indexOfNumbers) numeri univoci da inserire nell'array
for (let i=0 ; i<indexOfNumbers ; i++) {
  let randomNumber = 0;

  do {
    randomNumber = getRandomNumber(1, 100);
  } while (gameNumbers.includes(randomNumber));

  textFinal += `<span>${randomNumber}</span>`;
  gameNumbers.push(randomNumber);
}
divRandomNumber.innerHTML = textFinal;

let second = 30;
const intervalCountdown = setInterval(() => {
  if (second) {
    divCountdown.innerText = second--;
  } else {
    divRandomNumber.innerText = " ";
    divCountdown.innerText = second;
    clearInterval(intervalCountdown);
  }
},1000)

