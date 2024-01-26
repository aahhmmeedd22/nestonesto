// imamo arr.push(el) ubacuje element na poslednje mesto niza
// imamo arr.pop() izbacuje poslednji element iz niza
// imamo arr.shift() izbacuje nam prvi element iz niza 
// imamo arr.unshift(el) da ubacimo element na pocetak niza

// const test = "ime-prezime";



// const test = "ime-prezime";
// const test2 = test.split("-")

// console.log(test2)


let broj = prompt(`Unesite broj`)
while(isNaN(broj)){
    broj = prompt("Unesite BROJ")
}

for (let i = 1; i <= broj; i++) {
    let str = '';
    for (let k = broj - i; k > 0; k--) {
        str += ' ';
    }
    for (let j = 0; j < i; j++) {
        str += '*';
    }
    for (let j = 0; j < i - 1; j++) {
        str += '*';
    }
    console.log(str);
}