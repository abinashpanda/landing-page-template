import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Home from 'page-components/home'
import type { HomeProps } from 'page-components/home'
import { CMSDataItem } from 'types/cms'
import { extractDataFromCMSDataItem } from 'utils/data'
import { getApiClient } from 'utils/client'
import { StrapiImage } from 'types/image'
import qs from 'query-string'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function HomePage({ title, heroDescription, activePrograms }: HomePageProps) {
  return <Home title={title} heroDescription={heroDescription} activePrograms={activePrograms} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  try {
    const apiClient = getApiClient()
    const { data: homePageData } = await apiClient.get<
      CMSDataItem<{
        heroSection: { title: string; description: string; image: StrapiImage }[]
        activePrograms: { title: string; description: string; icon: StrapiImage; id: number }[]
      }>
    >(`/home?${qs.stringify({ populate: ['heroSection', 'heroSection.image', 'activePrograms'] })}`)
    const pageData = extractDataFromCMSDataItem(homePageData)
    return {
      props: {
        title: pageData.heroSection[0].title,
        heroDescription: pageData.heroSection[0].description,
        activePrograms: pageData.activePrograms,
      },
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    }
  }
}
