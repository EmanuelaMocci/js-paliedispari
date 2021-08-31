// // 1. Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");


// // 2. Creare una funzione per capire se la parola inserita è palindroma
function palindroma (parola){
    var parolaInversa = "";
    for (var i = parola.length -1; i >= 0; i--) {
        parolaInversa = parolaInversa + parola.charAt(i);                            
    }
    return parolaInversa;
}

var parolaInversa = palindroma(parolaUtente); 

if (parolaUtente == parolaInversa) {
    alert("La parola è palindroma");
    }else {
        alert("La parola non è palindroma");
    }

console.log(parolaInversa);



// function palindrome(s) {
//     var reverseString = s.split("").reverse().join("");
//     if(s==reverseString)
//        console.log("palindrome");
//     else
//        console.log("not palindrome");
//  }
//  palindrome(parola);