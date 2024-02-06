// const nasZadatak = [1,2,3,4,5,6,7,8,9,10]

// let noviNiz = nasZadatak.map((el,i,arr) =>{
//     if(i % 2 === 0){
//         return el + 1;
//     }
//     else{
//         return el - 1;
//     }
// }
// )

// console.log(nasZadatak,noviNiz)

const nasZadatak = [1,2,3,4,5,6,7,8,9,10]
let noviNIz = []
const broj = 1;

function nesto(nasZadatak) {
    for (let i = 0; i < nasZadatak.length; i++) {
         noviNIz.push(nasZadatak[i] + broj)
    }
}
nesto(nasZadatak)
console.log(noviNIz)