alert("Bem-vindo(a) ao Game do Número Secreto.");

let numeroMaximo = 20;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //20 porque são duas casas decimais para esquerda e + 1 pois considera 0, para ter o 20 precisa dele.
console.log(`O número secreto é ${numeroSecreto}.`); //apenas para testar qual é o número secreto via inspecionar.

let palpite;
let tentativas = 1; //a primeira tentativa já está sendo feita quando o usuário insere o número.

while (palpite != numeroSecreto) {
    palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

    if (numeroSecreto == palpite) {
        break; //o break fará com que se o usuário acertar na primeira tentativa, a lógica vá para fora do while.
    }
    else { //aqui é certeza que o usuário errou, então deve contar a tentativa.
        if (palpite < numeroSecreto) {
            alert(`O número secreto é maior do que ${palpite}.`);
        }
        else {
            alert(`O número secreto é menor do que ${palpite}.`);
        }
        tentativas++ //ou tentativas = tentativas + 1; é ele + ele mesmo.
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);

//tudo que foi substituído pelo uso do operador ternário:
//if (tentativas > 1) {
//    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} tentativas.`);
//}
//else {
//    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} tentativa.`);
//}