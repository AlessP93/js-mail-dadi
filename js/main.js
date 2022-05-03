// Chiedi all’utente la sua email
const email = prompt("Inserisci la tua email");

// controlla che sia nella lista di chi può accedere ARRAY
const listaEmail = ["mariorossi@mail", "lucabarilla@mail", "fedeesposito@mail", "ettoreguidi@mail", "ettorerossi@mail"]
let controllore = false;

for (let i = 0; i < listaEmail.length; i++ ) {      
    if (email === listaEmail[i]) {
        controllore = true 
    } 
}

if (controllore) {
    console.log("La tua email è valida");
    alert("Puoi accedere")
} else {
    console.log("La tua email non è valida");
    alert("Non puoi accedere")
}

document.getElementById("box").innerHTML = "Bentornato la tua email è valida !"










