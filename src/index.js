import fs from 'fs';

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, data) => {
    console.log(data)
})

// console.log(caminhoArquivo)