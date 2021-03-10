
// 1 --- Il computer deve generare 16 numeri casuali tra 1 e 100.

// FUNZIONI

// crea un numero random tra due estremi inclusi
function getRandom(min,max) {
  return Math.floor(Math.random()*(max - min +1))+ min;
}

// cerca un elemento in un array
function inArray(array,elemento) {
  var i =0;

  while (i < array.length) {
    if (array[i] == elemento) {
      return true;
    }
    i ++;
  }
  return false;
}

// / FUNZIONI

// creo un array e controllo se ci sono due numeri uguali
var arrayComp = [];
do {
    // genero un numero random con la funzione
    var numeriComp = getRandom(1,100);

    // Push nell'array solo se
    // l'elemento non è contenuto nell'array
    if (!inArray(arrayComp,numeriComp)) {
        arrayComp.push(numeriComp);
    }

} while (arrayComp.length < 16);

console.log(arrayComp)


// 2 --- In seguito deve chiedere all’utente (100 - 16) (lo chiedo per 5 volte) di inserire un numero alla volta
var arrayUtente = [];
bombaEsplosa = false;

while (arrayUtente.length < 5 && bombaEsplosa == false ) {
  // altrimenti si continua chiedendo all’utente un altro numero.
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"))

  // Se il numero è presente nella lista dei numeri generati,
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
    alert("Attenzione al numero che stai inserendo");
  }
  else if ( inArray(arrayComp,numeroUtente) == true ) {
    bombaEsplosa = true;
  } else if ( inArray(arrayUtente,numeroUtente) == true ){
    alert("Non fare il furbo!");
  } else {
    arrayUtente.push(numeroUtente);
  }
}

// stampo in console il punteggio finale

if (bombaEsplosa == true) {
  // visualizzo tutti i numeri validi inseriti dall'utente
  console.log("Hai preso la bomba ma hai inserito " + arrayUtente.length + " numeri validi");

} else {
  console.log("Bravo hai vinto");
}



// 4 --- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 5 --- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
