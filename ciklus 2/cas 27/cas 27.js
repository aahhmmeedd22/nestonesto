// if(!localStorage.getItem(`jel korisnik ulogovan?`)){
//     localStorage.setItem(`korisnickoIme`, prompt(`unesi korisnicko ime`))
//     localStorage.setItem("sifra", prompt(`unesi sifru`))
//     localStorage.setItem(`jelkorisnikulogovan?`, true)
// }
// else{
//     alert(`dobrodosao ${localStorage.getItem("korisnickoime")}`)
// }

if(!localStorage.getItem("jelKorisnikUlogovan?")){
    localStorage.setItem("korisnickoime",prompt("unesi korisnicko ime"))
    localStorage.setItem("sifra",prompt("unesi sifru"))
    localStorage.setItem('jelKorisnikUlogovan?',true)
}
else {
    alert(`Dobro dosao ${localStorage.getItem("korisnickoime")}`)
}