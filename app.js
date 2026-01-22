alert("Bem-vindo(a) ao Game do Número Secreto.");

let numeroSecreto = 1;
let palpite = prompt("Escolha um número entre 1 e 20:");

if (numeroSecreto == palpite) {
    alert(`Parabéns! Você acertou o número secreto, que era: ${numeroSecreto}.`);
}

else {
    if (palpite < numeroSecreto) {
        alert(`O número secreto é maior do que ${palpite}.`)
    }
    else {
        alert(`O número secreto é menor do que ${palpite}.`)
    }

    
}