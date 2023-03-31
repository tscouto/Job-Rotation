
// 5) Escreva um programa que inverta os caracteres de um string.

function inverteString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return console.log(novaString)
}

inverteString('tiago da silva couto') //otuoc avlis ad ogait