import React from 'react'

export default async function getWikiResults(searchTerm: string) {
  // all of these params are related to the wikipedia API
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  })

  // concataneate the search terms
  const response = await fetch(
    'https://en.wikipedia.org/w/api.php?' + searchParams
  )

  return response.json()
}
