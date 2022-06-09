import * as Prismic from '@prismicio/client'
import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = Prismic.getRepositoryName(endpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}


export function getPrimicClient() {
  const client = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  return client
}