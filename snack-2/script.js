// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var numero1 = prompt("Scegli se inserire un numero pari o dispari");

if (numero1 == "dispari") {
    var numero2 = parseInt(prompt("Scegli un numero da 1 a 5"));
} else if (numero1 == "pari"){
    var numero2 = parseInt(prompt("Scegli un numero da 1 a 5"));  
} else {
    alert("Errore");
}
console.log(numero2);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min, max){
    var random = Math.floor(Math.random() * (max - min +1)) + min;
    return random;
} 

// Sommiamo i due numeri
var numeroCpu = randomNumber(1, 5);
console.log(numeroCpu);
var somma = numero2 + numeroCpu;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari(somma){
    if (somma % 2 == 0) {
        return ("La somma dei due numeri è pari");
    } else {
        return ("La somma dei due numeri è dispari");
    }
}

// Dichiariamo chi ha vinto.
