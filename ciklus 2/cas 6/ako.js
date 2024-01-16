const prPr = prompt(`Upisi prvi broj`);
const drBr = prompt(`Upisi drugi broj`);
const trBr = prompt(`Upisi treci broj`);

if(prBr % 3 == 0 && drBr % 3 == 0 && trBr % 3 == 0 && prBr % 5 == 0 && drBr % 5 == 0 && trBr && 5 == 0){
    console.log("fizBuzz")
}
else if(prBr % 3 == 0 && drBr % 3 == 0 && trBr % 3 == 0){
    console.log("fizz")
}
else if(prBr % 5 == 0 && drBr % 5 == 0 && trBr && 5 == 0){
    console.log("buzz")
}
else if(isNaN(prBr && drBr && trBr)){
    console.log("Niste uneli broj")
}
else{
    console.log("Brojevi nisu deljivi ni sa 3 ni sa 5.")
}

// const prBr = prompt(`Unesi prvi broj`);
// const drBr = prompt(`Unesi drBr broj`);



// function izracunavanje(a, b){
//     suma = (Number(a) + Number(b))
//     alert(`${a} + ${b} = ${suma}`)
// }

// izracunavanje(prompt(`unesi prvi broj`), prompt(`unesi drugi broj`))