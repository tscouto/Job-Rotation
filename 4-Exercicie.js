// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
// O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em
//  direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará 
//  mais próximo a cidade de Ribeirão Preto?

function nextRiberáoPreto(speedCar, speedTruck, distance) {
    // distância entre as cidades em km
    const time = distance / (speedCar + speedTruck); // tempo em horas
    const positionCar = speedCar * time; // posição em km do carro em relação a Ribeirão Preto
    const positionTruck = distance - (speedTruck * time); // posição em km do caminhão em relação a Ribeirão Preto

    if (positionCar < positionTruck) {
        console.log("O carro estará mais próximo de Ribeirão Preto.");
    } else {
        console.log("O caminhão estará mais próximo de Ribeirão Preto.");
    }
}
nextRiberáoPreto(110, 80, 200) // "O carro estará mais próximo de Ribeirão Preto."









function nextCity(distance, speedCar, speedTruck) {

    const timeTag = 5 / 60; // horas
    const time = distance / (speedCar + speedTruck); // tempo em horas
    const positionCar = speedCar * time; // posição em km do carro em relação a Ribeirão Preto
    const positionTruck = distance - (speedTruck * time); // posição em km do caminhão em relação a Ribeirão Preto

    // Calcula o tempo que cada veículo leva para chegar ao ponto de encontro
    const positionTruckTag = positionTruck + timeTag * 2;


    // Retorna o nome da cidade mais próxima do ponto de encontro
    if (positionCar < positionTruckTag) {
        console.log("O carro estará mais próximo de Ribeirão Preto")
    } else {
        console.log("O caminhão estará mais próximo de Ribeirão Preto.");
    }
}

nextCity(100, 110, 80); // Ribeirão Preto

 // a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles
//  e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.

//  Explicação:

//  A distância entre as cidades é de 100 km, como informado no enunciado.
//  A velocidade do carro é de 110 km/h e a velocidade do caminhão é de 80 km/h.
//  Cada pedágio adiciona 5 minutos (ou 1/12 de hora) ao tempo de viagem do caminhão.
//   Como o caminhão passa por dois pedágios, o tempo total adicionado é de 1/6 de hora.
//  Primeiro, calculamos o tempo que levará para os veículos se encontrarem levando em conta os pedágios.
//  Para isso, somamos o tempo que levariam para percorrer a distância sem pedágios com o tempo adicionado pelos pedágios.
//  Em seguida, calculamos a posição em que cada veículo estará em relação a Ribeirão Preto no momento em que se encontrarem.
//  Para isso, usamos a fórmula posição = velocidade x tempo.
//  Por fim, comparamos as posições dos veículos e retornamos a mensagem correspondente.
//  Com isso, concluímos que o carro estará mais próximo de Ribeirão Preto quando os veículos se encontrarem na rodovia.