// const user = {
//     username: "",
//     password: "",
//     mejl: ""
// }

// while (user.username.length < 3) {
//     user.username = prompt("Unesite username: ")
// }
// while (user.password.length < 3) {
//     user.password = prompt("Unesite sifru: ")
// }
// while (!user.mejl.includes("@") && !user.mejl.includes(".")) {
//     user.mejl = prompt("Unesi mejl")
// }

const username = prompt("Unesi username")
const password = prompt("Unesi password")
let mejl = prompt("Unesi mejl")
while (!mejl.includes("@") || !mejl.includes(".") || mejl.length < 5) {
    mejl = prompt("Mejl nije validan. Pokusajte opet.")
}
alert("Uspesno ste kreirali nalog.")

// let U = prompt("Unesi username")
// while (U !== username) {
//     U = prompt("Pogresan username. Probaj opet.")
// }

let usernameIliMejl = prompt("Unesi username ili mejl")
while (usernameIliMejl !== username && usernameIliMejl !== mejl) {
    usernameIliMejl = prompt("Unesi validan username ili mejl.")
}

let p = prompt("Unesi password")
while (p !== password) {
    p = prompt("Pogresan password. Probaj opet.")
}
// let m = prompt("Unesi mejl");
// while (m !== mejl) {
//     m = prompt("Pogresna mejl. unesite ponovo");
// }

//objekti-key value