import fs from 'fs';
import { json } from 'stream/consumers';

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

const lerArquivo = async () => {
    try {
       const contents = await fs.promises.readFile(link, 'utf-8')
       parsearESepararNomes(contents)
    //    console.log(novoContent[0].nome)
    } catch (error) {
        console.log(error)
    }
}

lerArquivo()

const parsearESepararNomes = (texto) => {
    const listaTexto = JSON.parse(texto)
    const nomes = listaTexto.map((passaro, index) => {
        return `${index +1 }: ${passaro.nome}`
    })
    console.log(nomes)
}

// console.log(caminhoArquivo)