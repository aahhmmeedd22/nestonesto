//console.log('Nas prvi cas!');

//prosti:
//Number,
//Boolean,
//String,
//undefined,
//Null



//slozeni:
//Array,
//Object,
//Function,



// const kemal = 150;
// pare = 150
// const staZelisKupiti = prompt("Mozes kupiti 1.cokoladu, 2.cigare ili 3.sok ").toLowerCase();

// const sok = 60;
// const cokolada = 40;
// const cigare = 480;

// switch(staZelisKupiti){
//     case "cokolada":
//         console.log(`Kupio si ${staZelisKupiti}`)
//         console.log(pare>cokolada);
//         pare=pare-cokolada;
//         console.log(`Ostalo vam je ${pare} dinara`);
//         break;
//         case "cigare":
//         console.log(`Kupio si ${staZelisKupiti}`)
//         console.log(pare>cigare);
//         pare=pare-cigare;
//         console.log(`Ostalo vam je ${pare} dinara`);
//             break;
//         case "sok":
//             console.log(`Kupio si ${staZelisKupiti}`)
//             break;
//         default:
//             console.log("Odustao si nisi kupio nista.")
// }




//cas 5




// const paranIliNeparan = prompt("Unesi broj")

// if(!isNaN(paranIliNeparan)){
//     if(paranIliNeparan % 2 == 0){
//         console.log("Broj je paran.")
//     }
//     else{
//         console.log("Broj je neparan.")
//     }
// }
// else
// console.log("Niste uneli broj.")



//cas 5 domaci 

// const ispis = prompt("Koji je tvoj broj?")

// if(ispis % 3 == 0){
//     console.log("fizz")
// }
// if(ispis % 5 == 0){
//     console.log("buzz")
// }

//if(ispis % 3 == 0 && ispis % 5 == 0){
//    console.log("fizzbuzz")
//}
//default:
//    console.log("Broj nije deljiv ni sa 3 ni sa 5")
// else(ispis % 3 == 0 && ispis % 5 == 0){
//     console.log("fizzbuzz")
// }
// else{
//     console.log("Ne zadovoljava uslov")
// }



//cas 6

// const prPr = prompt(`Upisi prvi broj`);
// const drBr = prompt(`Upisi drugi broj`);
// const trBr = prompt(`Upisi treci broj`);

// if(prBr % 3 == 0 && drBr % 3 == 0 && trBr % 3 == 0 && prBr % 5 == 0 && drBr % 5 == 0 && trBr && 5 == 0){
//     console.log("fizBuzz")
// }
// else if(prBr % 3 == 0 && drBr % 3 == 0 && trBr % 3 == 0){
//     console.log("fizz")
// }
// else if(prBr % 5 == 0 && drBr % 5 == 0 && trBr && 5 == 0){
//     console.log("buzz")
// }
// else if(isNaN(prBr && drBr && trBr)){
//     console.log("Niste uneli broj")
// }
// else{
//     console.log("Brojevi nisu deljivi ni sa 3 ni sa 5.")
// }

//const prBr = prompt(`Unesi prvi broj`);
//const drBr = prompt(`Unesi drBr broj`);



// function izracunavanje(a, b){
//     suma = (Number(a) + Number(b))
//     alert(`${a} + ${b} = ${suma}`)
// }

// izracunavanje(prompt(`unesi prvi broj`), prompt(`unesi drugi broj`))


//cas 6 domaci

// const a=+prompt(`Unsei prvi broj: `)
// const b=+prompt(`Unsei drugi broj: `)
// const o=prompt(`Unesi operatora: `)

// switch(o){
//     case "+":
//         c = a + b;
//         alert(`Izraz izgleda: ${a} + ${b} = ${c}`)
//     break;
//     case "-":
//         c = a - b;
//         alert(`Izraz izgleda: ${a} - ${b} = ${c}`)
//     break;
//     case "*":
//         c = a * b;
//         alert(`Izraz izgleda: ${a} * ${b} = ${c}`)
//     break;
//     case "/":
//         c = a / b;
//         alert(`Izraz izgleda: ${a} / ${b} = ${c}`)
//     break;
//     default:
//         if( o == isNaN){
//             alert(`Niste uneli odgovarajuci operator.`)
//         }
//         else{
//             alert(prompt(`Niste uneli odgovarajuci operator, molimo unesite jedan od sledeca cetiri operatora: +, -, * ili /`))
//         }
// }

// izracunavanje(prompt(`Unesi prvi broj:`), prompt(`Unesi drugi broj:`), prompt(`Unesi jedan od parametara:`))

// function izracunavanje(a, b, o){
//     if( o == "+" ){
//         sum = Number(a) + Number(b)
//         // alert(`Suma broja ${a} i broja ${b} je ${sum}`)
//         alert(`${a} + ${b} = ${sum}`)
//     }
//     else if( o == "-" ){
//         sum = Number(a) - Number(b)
//         alert(`${a} - ${b} = ${sum}`)
//     }
//     else if( o == "*" ){
//         sum = Number(a) * Number(b)
//         alert(`${a} * ${b} = ${sum}`)
//     }
//     else if( o == "/" ){
//         sum = Number(a) / Number(b)
//         alert(`${a} / ${b} = ${sum}`)
//     }
// }

//cas 7

//cas 8



//cas 9

const arr = [1, 2, 3, 4, 5, 6];

// zbir=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
// console.log(zbir)

let res = 0;
let counter = arr.length - 1;

while(counter >= 0){
        if( arr[counter] % 2 == 0 ){
                // console.log(arr[counter])
                res = res + arr[counter]
                // counter--;
        }
        counter--;
}

console.log(res)