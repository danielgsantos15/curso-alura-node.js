import fetch from 'node-fetch'

async function checaStatus(arrayURLs) {
  const arrayStatus = await Promise
  .all(arrayURLs
    .map(async url => {
      const res = await fetch(url)
      return res.status
  }))
  return arrayStatus
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks[0]
  .map(objetoLink => Object
    .values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks)
  const statusLinks = await checaStatus(links)
  const results = Object.assign(statusLinks)

  const resultados = arrayLinks[0].map((objeto, i) => ({
    ...objeto,
    status: statusLinks[i]
  }))
  return resultados
}

export default validaURLs