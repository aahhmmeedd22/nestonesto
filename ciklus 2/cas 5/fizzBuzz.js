const paranIliNeparan = prompt("Unesi broj")

if(!isNaN(paranIliNeparan)){
    if(paranIliNeparan % 2 == 0){
        console.log("Broj je paran.")
    }
    else{
        console.log("Broj je neparan.")
    }
}
else
console.log("Niste uneli broj.")