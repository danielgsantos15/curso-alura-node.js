import  chalk  from 'chalk'
import fs from 'fs'
import path from 'path'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const arrayResults = []
  let temp
  
  while ((temp = regex.exec(texto)) !== null) {
    arrayResults.push({ [temp[1]]: temp[2] })
  }
  // operador ternário
  return arrayResults.length === 0 ? 'não há links' : arrayResults
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivos no caminho'))
}

async function pegaArquivo(caminho) {
  const caminhoAbsoluto = path.join('__dirname' , '..' , caminho)
  const encoding = 'utf-8'
  try{
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding })
    const result = await Promise.all(arquivos.map (async (arquivo) => {
      const localArquivo = `${caminhoAbsoluto}/${arquivo}`
      const texto = await fs.promises.readFile(localArquivo, encoding)
      return extraiLinks(texto)
    }))
    return result[0]
  } catch(erro) {
    trataErro(erro)
  }
}

export default pegaArquivo

// async function pegaArquivo(caminhoDoArquivo) {
// const encoding = 'utf-8'
//   try{
//     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
//     return extraiLinks(texto)
//   } catch(erro) {
//     trataErro(erro)
//   }
// }

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