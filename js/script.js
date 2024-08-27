// Prendo dal dom gli elementi che mi servono
const countdownField = document.getElementById('countdown');
const guessNumber = document.getElementById('guessNumber');
const inputUser = document.getElementById('input-user');
const description = document.getElementById('description');
const buttonSendNumber = document.querySelector('button');
const valuation = document.getElementById('valuation');


// Creo una variabile per il tempo rimanente
let timeLeft = 2;

// Creo la funzione per il countdown
function countdown() {
    // inserisco nel dom il tempo rimanente
    countdownField.innerText = timeLeft;
    if (timeLeft > 0) { // se il tempo rimanente è maggiore di 0
        timeLeft--;
    } else { // altrimenti blocca il countdown
        clearInterval(countdownInterval);
        // faccio sparire il tempo rimanente
        countdownField.classList.add('d-none');
        // faccio sparire i numeri da ricordarsi
        guessNumber.classList.add('d-none');
        // tolgo la descrizione
        description.classList.add('d-none');
        // rendo visibili gli input per il giocatore
        inputUser.classList.remove('d-none');
        // e rendo infine visibili il bottone e la spiegazione di cosa fare
        buttonSendNumber.classList.remove('d-none');
        valuation.classList.remove('d-none');
    }
}

// Creo l'intervallo
const countdownInterval = setInterval(countdown, 1000);

// creo un array dei numeri scritti in pagina
const guessNumberArray = [16, 45, 53, 67, 91];

// creo una funzione per la verifica dei numeri scritti dall'utente
function verifyNumber() {
    // recupero i numeri inseriti dall'utente
    const numberUser = [
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ]
    // creo una variabile per vedere se sono uguali i numeri
    const isSame = false;

    // ora posso confrontare i due array
    for (let i = 0; i < guessNumberArray.length; i++) {
        if (numberUser[i] === guessNumberArray[i]) {
            isSame = true;
            break;
        }
    }
}



