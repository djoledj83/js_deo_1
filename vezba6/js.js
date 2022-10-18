let a = parseInt(prompt("Unesite broj:"));


if(isNaN(a)) {
    console.log("Niste uneli broj");
} else if (a%2==0 && a%3==0) {
    console.log("Paran je i deljiv sa 3");
} else { 
    console.log ("Nije paran ni deljiv sa 3");
}