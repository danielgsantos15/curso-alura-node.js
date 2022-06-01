import  chalk  from 'chalk'
import fs from 'fs'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const arrayResults = []
  let temp
  
  while ((temp = regex.exec(texto)) !== null) {
    arrayResults.push({ [temp[1]]: temp[2] })
  }
  return arrayResults
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivos no caminho'))
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto))
  } catch(erro) {
    trataErro(erro)
  }
}

// pegaArquivo('./arquivos/texto.md')

export default pegaArquivo

// function dominioPrincipal(texto) {
//   const regex = /https?:\/\/[^\s$.?#].[^\/\s]*\//gm
//   const dominiosExtridos = texto.match(regex)
//   console.log(chalk.green(dominiosExtridos))
// }
// dominioPrincipal(texto)

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.promises
//   .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//   .catch((erro) => trataErro(erro))
// }

// function promessa(bool) {
//   const x = bool;
//   return new Promise((resolve, reject) => {
//     if (!x) {
//       reject(new Error("falha na promessa"));
//     }
//     resolve("sucesso na promessa");
//   });
// }

// function exibeResposta(textoResult) {
//   console.log(textoResult);
// }

// promessa(true)
//   .then((texto) => exibeResposta(texto))
// sucesso na promessa

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro)
//     }
//     console.log(chalk.green(texto))
//   })
// }