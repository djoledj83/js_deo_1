let a = parseInt(prompt("Unesite broj 1:"));
let b = parseInt(prompt("Unesite broj 2:"));
let c = parseInt(prompt("Unesite broj 3:"));


// if(a>b && a>c) {
//     console.log(a);
// } else if (b>a && b>c) {
//     console.log(b);
// } else { 
//     console.log (c);
// }

let najveci = a;

if(najveci<b) {
    najveci = b;
}
if (najveci<c) {
    najveci = c;
}
console.log(najveci);