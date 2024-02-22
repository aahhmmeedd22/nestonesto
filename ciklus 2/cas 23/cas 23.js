// const niz = [1,2,3,4,5,6,7,8];

// const obj = {
//     name: "Veljko",
//     age: 22,
//     university: "DUNP"
// }

// const ime = "ahmed"

// ime = "ahmeeed"


// niz = [3,4,5,666,664,123]

// console.log(niz)



// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
 
const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: ["0622222", "02033322"],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (povecanje) {
    if (this.trenutnaBrzina + povecanje > 260) {
        this.trenutnaBrzina = 260
    }else{
        this.trenutnaBrzina += povecanje
    }
};

myCar.smanjenjeBrzine = function (smanjenje) {
    if (this.trenutnaBrzina - smanjenje < 0) {
        this.trenutnaBrzina = 0
    }else{
        this.trenutnaBrzina -= smanjenje
    }
};

myCar.koci = function () {
    this.trenutnaBrzina = 0
};

myCar.povecanjeBrzine(290)
console.log(myCar.trenutnaBrzina)

myCar.smanjenjeBrzine(300)
console.log(myCar.trenutnaBrzina)

myCar.koci();
console.log(myCar.trenutnaBrzina)

