'use strict'

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

//creo il nuovo array vuoto, dove verranno inseriti i valori che rispettano le condizioni
const nuovoArray = [];

//stabilisco un numero minimo ed un numero massimo perché non mi viene come farlo diversamente
const numeroMinimo = 1;
const numeroMassimo = 4;

//ciclo forEach
myArray.forEach((element, i) => {
    console.log(element, i)
    if (i > numeroMinimo && i < numeroMassimo) {
        nuovoArray.push(element);
    }
})
console.log(nuovoArray)

//filter
const rangeNomi = myArray.filter((element, i) => {
    return i > numeroMinimo && i < numeroMassimo;
})
console.log(rangeNomi)

/*
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/