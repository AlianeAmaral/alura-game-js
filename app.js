alert("Bem-vindo(a) ao Game do Número Secreto.");
let numeroSecreto = 7;
let palpite;

while (palpite != numeroSecreto) {
    let palpite = prompt("Escolha um número entre 1 e 20:");

    if (numeroSecreto == palpite) {
        alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}.`);
    }
    else {
        if (palpite < numeroSecreto) {
            alert(`O número secreto é maior do que ${palpite}.`)
        }
        else {
            alert(`O número secreto é menor do que ${palpite}.`)
        }
    }
}