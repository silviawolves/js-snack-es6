'use strict'

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
    ];

//creo un array per le tarche maiuscole
const arrayMaiuscolo = []

//ciclo nell'array di oggetti per estrarre il nome e convertirlo in maiuscole,
//poi lo pusho nel nuovo array
students.forEach((element, i) => {
    const {name} = element
    const nomiMaiuscoli = name.toUpperCase()
    arrayMaiuscolo.push(nomiMaiuscoli)
})
console.log(arrayMaiuscolo)


/*
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
    ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/