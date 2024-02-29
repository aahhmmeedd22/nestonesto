// const neko = {
//     ime:"ahmed",
//     prezime:"rasljanin",
//     godine:19
// }

// Object.entries(neko).forEach(([key, value])=>{
//     console.log(key, value);
// })

// class osoba {
//     constructor(ime,prezime,godine){
//         this.ime = ime,
//         this.prezime = prezime,
//         this.godine = godine
//     }
// }

// class ucenik extends osoba {
//     constructor(skola,ime,prezime,godine){
//         super(ime, prezime, godine);
//             this.skola = skola;
//         }
//         informacije(){
//             console.log(this.godine, this.ime, this.prezime, this.skola);
//         }
// }

// const neko = new ucenik("gimn", "sandzak", "pazar", 67)

// neko.informacije();



class zivotinje {
    constructor(ime, boja, starost){
        this.ime = ime
        this.boja = boja
        this.starost = starost
    }
}

class pas extends zivotinje {
    constructor(ime, boja, starost){
        super(ime, boja, starost)
    }
    lajanje(){
        console.log("af af")
    }
}
class macka extends zivotinje {
    constructor(ime, boja, starost){
        super(ime, boja, starost)
    }
    mjaukanje(){
        console.log("mjau")
    }
}

const dog = new pas("Rex", "crna", 5)
const cat = new macka("Mici", "bela", 2)

dog.lajanje();
cat.mjaukanje();