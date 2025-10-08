export function sum(array) {
    let soma=0;
    for(let i=0; i< array.length; i++){
        soma+=array[i];
    }
    return soma;
}

export function product(array) {
    let multi=1;
    for(let i=0; i< array.length; i++){
        multi*=array[i];
    }
    return multi;
}

export function sumOdds(array) {
    let impar=0;
    for(let i=0; i< array.length; i++){
        if (array[i] % 2 !== 0){
            impar+=array[i];
        }
    }
    return impar;
}