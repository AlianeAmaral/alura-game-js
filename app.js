alert("Bem-vindo(a) ao Game do Número Secreto.");
let numeroSecreto = parseInt(Math.random() * 20) + 1; //número aleatório entre 1 e 20.
let palpite;
let tentativas = 1; //a primeira tentativa já está sendo feita quando o usuário insere o número.

while (palpite != numeroSecreto) {
    let palpite = prompt("Escolha um número entre 1 e 20:");

    if (numeroSecreto == palpite) {
        //o break fará com que se o usuário acertar na primeira tentativa, ele vai para fora do while.
        break;
    }
    //aqui é certeza que o usuário errou.
    else {
        if (palpite < numeroSecreto) {
            alert(`O número secreto é maior do que ${palpite}.`)
        }
        else {
            alert(`O número secreto é menor do que ${palpite}.`)
        }

        //tentativas = tentativas + 1; é o mesmo que está abaixo.
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} tentativas.`);
//}
//else {
//    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${tentativas} tentativa.`);
//}