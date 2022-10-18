let a = parseInt(prompt("Unesite broj:"));


if(a<50 || a>100) {
    console.log(Math.pow(a,3));
} else if (a>=50 && a<=100){
    console.log(Math.pow(a,2));
}