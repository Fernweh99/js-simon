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
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

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
    const timeRetard = setTimeout(() =>{
      const userNumbers = [];
      for (let i=0 ; i<gameNumbers.length ; i++) {
        let userNumber;

        do {
          if (userNumbers.includes(userNumber)) {
            alert("Hai già inserito questo numero!")
          }
          userNumber = parseInt(prompt(`Inserisci un numero da 1 a 100, ${i + 1}/${gameNumbers.length}`))
        } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100 || userNumbers.includes(userNumber));

        userNumbers.push(userNumber);
      }

      let score = 0;
      let numberGuess = "";

      for (let i = 0; i < userNumbers.length; i++) {

        if (gameNumbers.includes(userNumbers[i])) {
          score += 1;
          numberGuess += userNumbers[i] + " ";
        }
      }

      alert(`Hai totalizzato un punteggio di ${score}/${gameNumbers.length} e i numeri che hai indovinato sono ${numberGuess}`)
    },200)
  }
},1000)

