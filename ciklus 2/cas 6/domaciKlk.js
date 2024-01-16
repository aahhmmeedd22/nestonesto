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