alert("Benvenuto");

email = prompt("Inserisci la tua email");
console.log(`l'email dell'utente è ${email}`)


const utenti = ["francesco@gmail.com","luca@gmail.com","alessia@gmail.com","fabio@gmail.com","simone@gmail.com"]


console.log("Lista delle Email:")

console.log( utenti[0] )
console.log( utenti[1] )
console.log( utenti[2] )
console.log( utenti[3] )
console.log( utenti[4] )


let emailNellaLista = false;

for (let c = 0; c < 5; c++ ) {

    if ( utenti[c] == email){
        console.log("L'email è nella lista. L'utente puo accedere.");
        emailNellaLista = true;
    }
}

if (emailNellaLista != true) {
    console.log("L'email non è nella lista. L'utente non puo accedere.");
}





   
