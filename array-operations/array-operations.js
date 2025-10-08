export function sum(array) {
    const soma = array.reduce((acc,num) => acc + num, 0);
    return soma;
}

export function product(array) {
    const multi= array.reduce((acc,num)=> num*acc,1)
    return multi;
}

export function sumOdds(array) {
    const impar= array.reduce((acc,num) => acc + ((num % 2 !== 0) ? num : 0),0);
    return impar;
}