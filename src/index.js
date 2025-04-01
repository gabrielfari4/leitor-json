import fs from 'fs';

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const termo = caminhoArquivo[3]

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
    filtrarPassaro(listaTexto, termo)
}

const filtrarPassaro = (lista, busca) => {
    const buscaString = busca.toString().toLowerCase()
    const passaros = lista.filter((passaro) => {
        /* for (const element of passaro) {
            element.includes(busca)
        } */
    //    return passaro.localizacao.includes(busca)
        // return passaro.filter(prop => prop.includes(busca))
        return Object.values(passaro).some(valor => {
            if (typeof valor === 'number') return valor.toString().includes(buscaString)
            if (typeof valor === 'object') {
                /* for (const element in valor) {
                    return element.toLowerCase() === busca
                } */
            //    return console.log(valor.includes(busca))
                const novoArray = valor.map(element => {
                   return element.toLowerCase()
                });
                return novoArray.includes(buscaString)
            }
            return typeof valor === "string" && valor.toLowerCase().includes(buscaString)
        });
    })
    console.log(passaros) 
}

// console.log(caminhoArquivo)