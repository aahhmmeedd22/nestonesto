const arrTest = [1,2,3,4,5,6,7,8,9,10,11,12]
const Parni = [];
const Neparni = [];
let index = 0

while(index < arrTest.length){
        if( arrTest[index] % 2 == 0 ){
                Parni.push(arrTest[index])
        }
        else{
                Neparni.push(arrTest[index])
        }
        index++;
}

console.log(Parni, "Ovo su parni brojevi iz pocetnog niza.")
console.log(Neparni, "Ovo su neparni brojevi iz pocetnog niza.")

let index2 = Neparni.length - 1;

Neparni.reverse()

const noviNiz = [];
let counter = Neparni.length - 1 

while( counter >= 0 ){
        noviNiz.push(Parni[counter] + Neparni[counter])
        counter--;
}

console.log(noviNiz)