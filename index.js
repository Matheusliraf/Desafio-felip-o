let nomeHeroi = "Skapetiz"
let xpDoHeroi = 10001
let nivelHeroi = ""

if (xpDoHeroi ===1000){
    nivelHeroi = "ferro"

}else if(xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    nivelHeroi = "bronze"

} else if(xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    nivelHeroi = "Prata"

} else if(xpDoHeroi >= 6001 && xpDoHeroi <= 7000){
    nivelHeroi = "Ouro"

} else if(xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    nivelHeroi = "Platina"

} else if(xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    nivelHeroi = "Ascendente"

} else if(xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    nivelHeroi = "imortal"

} else {
    nivelHeroi = "Radiante"
}

console.log("O heró de nome " + nomeHeroi + " está no nível de " + nivelHeroi)