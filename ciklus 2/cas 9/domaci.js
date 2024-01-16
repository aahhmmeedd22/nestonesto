const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

let neparni = 0;
let parni = 0;
let counter = arr.length - 1;

while(counter >= 0){
        if( arr[counter] % 2 == 0 ){
                parni = parni + arr[counter]
        }
        else{
                neparni = neparni + arr[counter]
        }
        counter--;
}

console.log(neparni)
console.log(parni)


//ubacivanje brojeva

// const brojevi = [];
// brojevi.push(prompt`Unesite elemente niza: `);

// let parni = 0;
// let neparni = 0;
// let counter = brojevi.length - 1;

// while( counter >= 0 ){
//         if( brojevi[counter] % 2 == 0 ){
//                 parni = parni + brojevi[counter]
//         }
//         else{
//                 neparni = parni + brojevi[counter]
//         }
//         counter--;
// }

// alert(parni)
// alert(neparni)