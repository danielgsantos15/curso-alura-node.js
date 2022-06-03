import fetch from 'node-fetch'

async function checaStatus(arrayURLs) {
  const arrayStatus = await Promise.all(arrayURLs.map(async url => {
    const res = await fetch(url)
    return res.status
  }))
  return arrayStatus
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks[0].map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks)
  const statusLinks = await checaStatus(links)
  return statusLinks
}

export default validaURLs