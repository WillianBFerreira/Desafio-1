let heroi = ["Kratos" , 9001];

let lvl;

if(heroi [1] >5000){
    if(heroi [1] >= 10000){
        lvl = "Radiante";
    } else if (heroi [1] >= 5001 && heroi [1] <= 7000) {
        lvl = "Ouro";
    } else if (heroi [1] >= 7001 && heroi [1] <= 8000) {
        lvl = "Platina";
    } else if (heroi [1] >= 8001 && heroi [1] <= 9000) {
        lvl = "Ascendente";
    } else if (heroi [1] >= 9001 && heroi [1] <= 10000)
        lvl = "Imortal";

} else if(heroi [1] < 1000) {
    lvl = "Ferro";
} else if (heroi [1] >= 1001 && heroi [1] <= 2000) {
    lvl = "Bronze";
} else if (heroi [1] >= 2001 && heroi [1] <= 5000) {
    lvl = "Prata";
}

console.log(`O Herói de nome ${heroi [0]} está no nível de ${lvl}.`);
