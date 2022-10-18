let a = parseInt(prompt("Unesite broj:"));
let brojac = 0;

if(typeof a === 'number' && isNaN(a)){
    alert("Nije unet broj!");
} else {
    if (a%2==0) {
        brojac++
    } 
    if (a%4==0) {
        brojac++
    }
    if (a%6==0) {
        brojac++
    }
    if (a%8==0) {
        brojac++
    }
}


alert(`Uneti broj je deljiv sa ${brojac} parnih brojeva.`)
