// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
// sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function Fibonacci(number) {
    let number1 = 0;
    let number2 = 1;
    let result = 0;

    while (result < number) {
        result = number1 + number2;
        number1 = number2;
        number2 = result;
    }

    if (result === number) {
        console.log(`O numero ${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O numero ${number} não pertence à sequência de Fibonacci.`);
    }
}

Fibonacci(2)