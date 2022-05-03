// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
const number = Math.floor((Math.random() * 6) + 1);
console.log(number)

const numberPc = Math.floor((Math.random() * 6) + 1);
console.log(numberPc)
// Stabilire il vincitore, in base a chi fa il punteggio più alto


if ( number > numberPc ) {
    console.log("Utente vince");
    
} else if ( number === numberPc ) {
    console.log("Risultato pari ");
    
} else {
    console.log("Pc vince");
}



