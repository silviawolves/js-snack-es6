'use strict'

//creo array di oggetti con le squadre di calcio
const squadreCalcio = [
    {
        nome: 'Arsenal FC',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'CSKA Mosca',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Liverpool FC',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bayer Leverkusen',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Villareal CF',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Paris Saint-Germain FC',
        punti: 0,
        falliSubiti: 0
    },
]
console.table(squadreCalcio)

//ciclo dentro l'array di oggetti per dare un valore random a punti e falli
for (let i = 0; i < squadreCalcio.length; i++) {
    const punti = Math.floor(Math.random() * 200)
    const falliSubiti = Math.floor(Math.random() * 50)
    //squadreCalcio[i].punti = punti
    //squadreCalcio[i].falliSubiti = falliSubiti
    squadreCalcio[i] = {...squadreCalcio[i], punti, falliSubiti}
}
console.table(squadreCalcio)

//creo una variabile vuota per generare l'array finale di nomi+falli
const falliGironi = []

//ciclo dentro le squadre per pushare solo i risultati che voglio nel nuovo array
for (let i = 0; i < squadreCalcio.length; i++) {
    const {nome, falliSubiti} = squadreCalcio[i]
    falliGironi.push({nome, falliSubiti})
    console.log(falliGironi[i])
}

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/