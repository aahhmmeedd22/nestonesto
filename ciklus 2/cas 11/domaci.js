const ime = "neko";
const sifra = "nestoo123";
let proveraImena = prompt(`Unesite ime: `)
while( ime !== proveraImena ){
    proveraImena = prompt("Neispravno ime. Ponovo unesite ime: ")
}
let proveraSifre = prompt(`Unesite sifru: `)
while( sifra !== proveraSifre ){
    proveraSifre = prompt("Neispravna sifra. Ponovo unesite sifru: ")
}
alert(`Ulogovani ste!!`)