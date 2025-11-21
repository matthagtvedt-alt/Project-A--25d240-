//Huntington-Hill Metoden
let resultat = 100000
let divisor = 1
resultat /= divisor*(divisor+1)**(1/2)

//Setning
let quote = "My name is"
quote += " " + "Dude"

console.log(resultat)
console.log(quote)

//If og Else funksjoner
let erAnsatt = false

if(erAnsatt){
    console.log("Du er ansatt")
}
else{
    console.log("Du er IKKE ansatt")
}

// Anonym funksjon

let testAvAnon = function(fnavn,enavn){
    console.log(`${fnavn} ${enavn}`)
}

testAvAnon("Matteus","Hagtvedt")

// Lambda funksjon

let mittArray = [21,67,420];

mittArray.filter((tall) => {console.log(tall % 2 == 0) })

let total = mittArray.reduce((sum, el) => { return (sum + el)}, 0);
console.log (total)

