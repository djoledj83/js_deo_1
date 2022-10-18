let username = prompt("Unesite username:");
// let password = prompt("Unesite password:");

let dbUser = "djole";
let dbPass = "123";


// if(username == dbUser && password == dbPass) {
//     alert("Uspesnmo ste se ulogovali");
// } else if (username == dbUser && password !== dbPass) {
//     alert("Pogresna lozinka");
// } else { 
//     alert ("Pogresan username");
// }

if(username == dbUser) {
    let password = prompt("Unesite password:");
} else if (password==dbPass) {
    alert("Uspesno ste se ulogovali");
    } else {
        alert("Pogresna Lozinka");
    }
else {
    alert("Pogresan Username");
}

