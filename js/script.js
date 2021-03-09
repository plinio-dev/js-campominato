
// 1 --- Il computer deve generare 16 numeri casuali tra 1 e 100.

function getRandom(min,max) {
  return Math.floor(Math.random()*(max - min +1))+ min;
}

// creo un array e controllo se ci sono due numeri uguali
var arrayComp = [];
do {
    // genero un numero random con la funzione
    var numeriComp = getRandom(1,100);

    // Push nell'array solo se
    // l'elemento non è contenuto nell'array
    if (!arrayComp.includes(numeriComp)) {
        arrayComp.push(numeriComp);
    }

} while (arrayComp.length < 16);

console.log(arrayComp)


// 2 --- In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 5.
var arrayUtente = [];
var i = 0 ;
while (i < 5 ) {
  // altrimenti si continua chiedendo all’utente un altro numero.
  var numeroUtente = parseInt(prompt("Bravo! Inserisci ancora un numero compreso tra 1 e 5"))

  i ++
  // 3 --- Se il numero è presente nella lista dei numeri generati,
  if (!arrayComp.includes(numeroUtente) && arrayUtente[i]!== numeroUtente ) {
    arrayUtente.push(numeroUtente)

  } else {
     // la partita termina,
    prompt("BOOM!!");
  }
}



// visualizzo tutti i numeri validi inseriti dall'utente
console.log(arrayUtente);

// stampo in console il punteggio finale
console.log("Il tuo punteggio è " + (((arrayComp.length) + (arrayUtente.length )) - arrayComp.length) + "su 5 tentativi") ;




// 4 --- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 5 --- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
