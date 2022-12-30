export type CMSData<T extends any> = {
  data: {
    id: number
    attributes: T
  }[]
}
