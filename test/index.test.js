import pegaArquivo from '../public/index.js'

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function')
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('./test/arquivos')
    expect(resultado).toEqual(arrayResult)
  })
})