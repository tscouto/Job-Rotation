
//   3) Descubra a lógica e complete o próximo elemento:


// a) 1, 3, 5, 7, ___
// Reposta

let valueA = 7;
let nextValueA = valueA + 2;
console.log(`O valor do próximo elemento é ${nextValueA}`); // 9

////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) 2, 4, 8, 16, 32, 64, ____

// Reposta

let valueB = 64;
let nextValueB = valueB * 2;
console.log(`O valor do próximo elemento é ${nextValueB}`); // 128

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// c) 0, 1, 4, 9, 16, 25, 36, ____

// Resposta

let indiceC = 7;
let nextValueC = indiceC * indiceC;
console.log(`O valor do próximo elemento é ${nextValueC}`); // 49

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// d) 4, 16, 36, 64, ____

// Resposta

let valueD = 64;
let nextValueD = valueD + 12;
console.log(`O valor do próximo elemento é ${nextValueD}`); // 76


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// e) 1, 1, 2, 3, 5, 8, ____

//  Resposta

let valueE1 = 8;
let valueE2 = 5;
let nextValueE = valueE1 + valueE2;
console.log(`O valor do próximo elemento é ${nextValueE}`); // 13

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//  f) 2,10, 12, 16, 17, 18, 19, ____

// Resposta

let valueF = 19;
let nextValueF;
if (valueF % 2 === 0) {
    nextValueF = valueF + 8;
} else {
    nextValueF = valueF + 1;
}
console.log(`O valor do próximo elemento é ${nextValueF}`); // 20