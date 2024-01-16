// const arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// for (let i = 0; i < arr.length; i++) {
//     const element = array[i];
    
// }

// const fizz = [];
// const buzz = [];
// const fizzBuzz = [];

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         fizzBuzz.push(i)
//     }
//     else if(i % 3 == 0){
//         fizz.push(i)
//     }
//     else if(i % 5 == 0){
//         buzz.push(i)
//     }
    
// }

// console.log(fizzBuzz.length)
// console.log(fizz.length)
// console.log(buzz.length)


// let prom = prompt("Unesite ime:")
// arr = []

// if(prom == prom.reverse()){
//     console.log("Podatak je palindrom")
// }
// else{
//     console.log("Podatak nije polindrom")
// }

const text = prompt(`Unesite element:`)
let newText = "";

for (let i = text.length - 1; i >=0; i--){
    newText = newText + text[i];
}

if(newText === text){
    alert("Palindrom")
}
else{
    alert("Nije palindrom")
}