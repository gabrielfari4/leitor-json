import fs from 'fs';

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

const lerArquivo = async () => {
    try {
       const contents = await fs.promises.readFile(link, 'utf-8')
       console.log(contents)
    } catch (error) {
        console.log(error)
    }
}

lerArquivo()

// console.log(caminhoArquivo)