type ImageFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  url: string
}

export type StrapiImage = {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    large: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  url: string
  provider: string
  createdAt: string
  updatedAt: string
  previewUrl: string | null
  provider_metadata: string | null
  size: number
}
