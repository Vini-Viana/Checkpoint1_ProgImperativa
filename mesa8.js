// let a = "marcos";

// if( a == "jose" ){
    // se a condição for verdadeira ou seja TRUE
    // console.log("dentro do if");
// }else{
    // se a condição for falsa ou seja FALSE
    // console.log("dentro do else")
// }


// let idade = 18;

// if (idade >18){
//  // se a condição for verdadeira ou seja TRUE
    // console.log("dentro do if maior de 18")
// } else if(idade >15){
    // // se a condição for verdadeira ou seja TRUE e a primeira condição for falsa
    // console.log("dentro do else if maior de 15")
// }else{
    // // se a condição for falsa ou seja FALSE
    // console.log("dentro do else")
// }


// if ( idade > 18){
    // return "maior de idade";
// }else{
    // return "menor de idade";
// }


// let result = idade > 18 ? "maior de idade" : "menor de idade";
// console.log (result);

// switch(idade){
    // case 18 :
        // console.log('idade igual a 18');
    // break
    // case 19 :
        // console.log('idade igual a 19')
    // break
    // default:
        // console.log('não era igual a nenhum')

// }

function podeSubir1(altura, acompanhada) {
      
    if (altura >= 1.40 && altura < 2) {
        return true
    } else if (altura == 1.20 && altura <= 1.40 && acompanhada == true) {
        return true
    } else {
        altura < 1.20
        return false
    }
}

console.log(podeSubir1(1.45, true))

function podeSubir2(altura, acompanhada) {
    
    if (altura >= 1.40 && altura < 2) {
        console.log('Acesso autorizado');

    } else if (altura == 1.20 && altura <= 1.40 && acompanhada == true) {
        console.log('Acesso autorizado somente com acompanhante');

    } else {
        altura > 1.20
        console.log('Acesso negado!');
    }
}

podeSubir2(1.50, true)
