// Prendo dal dom gli elementi che mi servono
const countdownField = document.getElementById('countdown');

// Creo una variabile per il tempo rimanente
let timeLeft = 5;

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
    }
}

// Creo l'intervallo
const countdownInterval = setInterval(countdown, 1000);

