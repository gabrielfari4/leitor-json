import fs from 'fs';

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
    /* const nomes = listaTexto.map((passaro, index) => {
        return `${index +1 }: ${passaro.nome}`
    }) */
    // console.log(listaTexto)
    filtrarPassaro(listaTexto, 'Tityridae')
}

const filtrarPassaro = (lista, busca) => {
    const passaros = lista.filter((passaro) => {
        /* for (const element of passaro) {
            element.includes(busca)
        } */
    //    return passaro.localizacao.includes(busca)
        // return passaro.filter(prop => prop.includes(busca))
        return Object.values(passaro).some(valor => {
            if (typeof valor === 'object') {
                /* for (const element in valor) {
                    return element.toLowerCase() === busca
                } */
            //    return console.log(valor.includes(busca))
                const novoArray = valor.map(element => {
                   return element.toLowerCase()
                });
                return novoArray.includes(busca.toLowerCase())
            }
            return typeof valor === "string" && valor.toLowerCase().includes(busca.toLowerCase())
        });
    })
    console.log(passaros) 
}

// console.log(caminhoArquivo)