// Prendo dal dom gli elementi che mi servono
const countdownField = document.getElementById('countdown');
const guessNumber = document.getElementById('guessNumber');
const inputUser = document.getElementById('input-user');
const description = document.getElementById('description');
const buttonSendNumber = document.getElementById('button');
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
        // genero 5 input
        createInput('number', 'Inserisci un numero', 5);
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

    // VERIFICO SE CI SONO DUPLICATI O NAN
    const numUser = []; //creo un array per i numeri

    // faccio un ciclo for per ripetere la validazione su tutti i numeri
    for (let i = 0; i < numberUser.length; i++) {
        const num = parseInt(numberUser[i]); //creo una variabile per il numero corrente
        if (isNaN(num)) {
            alert('Per favore inserisci 5 numeri');
            return false;
        }
        if (numUser.includes(num)) {
            alert('Hai inserito numeri uguali... Per andare avanti e verificare inserisci tutti i numeri diversi!');
            return false;
        }
        numUser.push(num); //infine dopo i controlli lo inserisco nell array
    }
    // creo una variabile per vederi quanti numeri corrispondono
    let sameNumberCount = 0;
    // ora posso confrontare i due array
    for (let i = 0; i < guessNumberArray.length; i++) {
        if (guessNumberArray.includes(numberUser[i])) {
            sameNumberCount++; //aumento il contatore di numeri uguali
        }
    }
    // ora scrivo il risultato in pagina
    const result = document.getElementById('result');
    resultText = sameNumberCount === guessNumberArray.length ? result.innerText = `BRAVO! Hai inserito tutti i numeri giusti!` : result.innerText = `PECCATO! I numeri giusti sono ${sameNumberCount} su 5`;

    return true;
}
// la funzione verifyNumber la eseguo quando clicco sul bottone
buttonSendNumber.addEventListener('click', function () {
    if (verifyNumber()) {
        // faccio sparire tutto ciò che non riguarda il risultato
        buttonSendNumber.classList.add('d-none');
        inputUser.classList.add('d-none');
        valuation.classList.add('d-none');
    }
});

// creo una funzione per generare tot input
function createInput(type, placeholder, number) {
    for (let i = 1; i <= number; i++) {
        const input = document.createElement('input');//creo l'input
        input.id = `num${i}`; //assegno l'id
        input.type = type; //assegno il type
        input.placeholder = placeholder; //assegno il placeholder
        inputUser.appendChild(input);
    }
}

