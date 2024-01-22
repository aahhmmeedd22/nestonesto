// const ime = "neko";
// const sifra = "nestoo123";
// let proveraImena = prompt(`Unesite ime: `)
// while( ime !== proveraImena ){
//     proveraImena = prompt("Neispravno ime. Ponovo unesite ime: ")
// }
// let proveraSifre = prompt(`Unesite sifru: `)
// while( sifra !== proveraSifre ){
//     proveraSifre = prompt("Neispravna sifra. Ponovo unesite sifru: ")
// }
// window.location.replace("portfolio.html")

//kopirati path ili ubaciti fajl i linkovati


// const arr = [1,2,3,4,5,6,7]
// const arrNovi = []
//for petljom popuniti ovaj niz tako da niz bude obrnut

// for( let i = arr.length - 1; i >= 0; i--){
//     arrNovi.push(arr[i])
// }

// console.log(arrNovi)




// const arr = [1,2,3,4,5,6,7]
// const arr2 = [1,3,3,4,5,6,7,8]
// const noviArr = []

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] === arr2[i]){
//         noviArr.push(arr[i])
//     }
// }

// console.log(noviArr)

const arr2 = [[1,2,3],[4,5,6],[7,8,9]]
const novi = []
let j = 0

for (let i = 0; i < arr2.length; i++){
    novi.push(arr2[i][j])
    j++    
}

console.log(novi)