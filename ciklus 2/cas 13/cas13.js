// imamo arr.push(el) ubacuje element na poslednje mesto niza
// imamo arr.pop() izbacuje poslednji element iz niza
// imamo arr.shift() izbacuje nam prvi element iz niza 
// imamo arr.unshift(el) da ubacimo element na pocetak niza

// const test = "ime-prezime";



// const test = "ime-prezime";
// const test2 = test.split("-")

// console.log(test2)


const broj = prompt(`Unesite broj n:`);

for (let i = 1; i <= broj; i++) {
    let str = '';
    for (let j = 0; j < i; j++){
        str += '*'
    }
    console.log(str);
    // str = '';
}