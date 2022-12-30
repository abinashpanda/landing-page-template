import { CMSDataItem, CMSDataItems } from 'types/cms'

export function extractDataFromCMSDataItems<T>(data: CMSDataItems<T>): (T & { id: number })[] {
  return data.data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }))
}

export function extractDataFromCMSDataItem<T>(data: CMSDataItem<T>): T & { id: number } {
  return {
    id: data.data.id,
    ...data.data.attributes,
  }
}
