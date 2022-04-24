import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || 'production',
  apiVersion: '2022-04-23',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || '',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource): ImageUrlBuilder =>
  builder.image(source)
