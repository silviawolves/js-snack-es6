'use strict'

//creo array con oggetti, ad ogni oggetto assegno nome + peso
const biciCorsa = [
    {
    nome: 'Colnago C68',
    pesoTelaio: 935,
    },
    {
    nome: 'BMC Timemachine',
    pesoTelaio: 980,
    },
    {
    nome: 'Specialized S-Works Roubaix',
    pesoTelaio: 900,
    },
    {
    nome: 'Wilier Triestina',
    pesoTelaio: 780,
    },
    {
    nome: 'Cannondale CAAD13',
    pesoTelaio: 1050,
    },
]

//creo una variabile a 0 da confrontare con gli altri oggetti per ricavare il peso minore
const {nome, pesoTelaio} = biciCorsa[0]
let pesoMinore = {nome, pesoTelaio, indice: 0}

//creo un ciclo dentro l'array di oggetti per leggerne i valori
//e confrontarli con il valore a 0, così ricavo il peso minore
for (let i = 0; i < biciCorsa.length; i++) {
    const {nome, pesoTelaio} = biciCorsa[i]
    console.log(biciCorsa[i])

    if (pesoTelaio < pesoMinore.pesoTelaio) {
        pesoMinore = {nome, pesoTelaio}
    }
}

//creo l'elemento in cui inserire a schermo il peso minore
const container = document.querySelector('.container')
const containerTelaio = document.createElement('div')
containerTelaio.classList.add('text-center', 'py-5')
container.append(containerTelaio)

//inserisco l'elemento a schermo
containerTelaio.innerHTML = `La bici da corsa più leggera è la ${pesoMinore.nome}
                            con un peso di grammi ${pesoMinore.pesoTelaio}.`

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/