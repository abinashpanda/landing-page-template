type CMSData<T extends any> = {
  id: number
  attributes: T
}

type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type CMSDataItem<T> = {
  data: CMSData<T>
}

export type CMSDataItems<T> = {
  data: CMSData<T>[]
  meta: {
    pagination: Pagination
  }
}
