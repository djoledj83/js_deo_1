let a = parseInt(prompt("Unesite broj 1:"));
let b = parseInt(prompt("Unesite broj 2:"));


if(isNaN(a && b)) {
    console.log('Niste uneli broj');
} else if (a<b){
    console.log('Drugi broj je veci');
}else if (a==b){
    console.log('Brojevi su jednaki');
}else {
    console.log('Brojevi su jednaki');
}