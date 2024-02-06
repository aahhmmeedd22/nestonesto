//pogresno procitan zadatak

const slovaa = (string) => {
    let novaSlova = "";
    for (let i = 0; i < string.length; i++) {
        if( i % 2 === 0){
            novaSlova += string[i].toUpperCase();
        }
        else{
            novaSlova += string[i].toLowerCase()
        }
    }
    return novaSlova;
}

console.log(slovaa("The Quick Brown Fox"))


//prvi zadatak

const slova = "The Quick Brown Fox"
let novaSlova = "";

for (let i = 0; i < slova.length; i++) {
    let novaSlova2 = slova.charAt(i);

    if (novaSlova2 === novaSlova2.toUpperCase()) {
        novaSlova += novaSlova2.toLowerCase()
    }else{
        novaSlova += novaSlova2.toUpperCase()
    }
}

console.log(novaSlova)


//drugi zadatak

let domaci = [NaN, 0, 15, false, -22, '"', undefined, 47, null]
let noviNiz = [];

for (let i = 0; i < domaci.length - 1; i++) {
    if (!isNaN(domaci[i]) && domaci[i] !== false && domaci[i] !== 0) {
        noviNiz.push(domaci[i])
    }
}

console.log(noviNiz)