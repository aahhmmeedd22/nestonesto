const kemal = 150;
pare = 150
const staZelisKupiti = prompt("Mozes kupiti 1.cokoladu, 2.cigare ili 3.sok ").toLowerCase();

const sok = 60;
const cokolada = 40;
const cigare = 480;

switch(staZelisKupiti){
    case "cokolada":
        console.log(`Kupio si ${staZelisKupiti}`)
        console.log(pare>cokolada);
        pare=pare-cokolada;
        console.log(`Ostalo vam je ${pare} dinara`);
        break;
        case "cigare":
        console.log(`Kupio si ${staZelisKupiti}`)
        console.log(pare>cigare);
        pare=pare-cigare;
        console.log(`Ostalo vam je ${pare} dinara`);
            break;
        case "sok":
            console.log(`Kupio si ${staZelisKupiti}`)
            break;
        default:
            console.log("Odustao si nisi kupio nista.")
}