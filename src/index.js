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
    criarESalvarArquivo(passaros)
}

const criarESalvarArquivo = (resultado) => {
    // const arquivoNovo = `/buscas/${busca}.txt`

    /* const textoFinal = resultado.forEach(objeto => {
        for (const element of objeto) {
            `${element}: ${objeto[element]}`
        }
    }); */
    resultado.forEach(object => {
        formatarTexto(object)
    });
}

const formatarTexto = (objeto) => {
    for (const element in objeto) {
        console.log(`${element}: ${
            element === "localizacao" ? objeto[element].join(', ')
            : element === "altura" ? (objeto[element] + "cm")
            : element === "peso" ? (objeto[element] + "kg")
            : objeto[element]
        }`)
    }
    console.log(`\n`)
} 

// INPUT node .\src\index.js .\json\posts.json brasil