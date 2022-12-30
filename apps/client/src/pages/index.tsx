import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Home from 'page-components/home'
import type { HomeProps } from 'page-components/home'
import axios from 'axios'
import { CMSDataItem, CMSDataItems } from 'types/cms'
import { extractDataFromCMSDataItem, extractDataFromCMSDataItems } from 'utils/data'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function HomePage({ title, heroDescription, activePrograms }: HomePageProps) {
  return <Home title={title} heroDescription={heroDescription} activePrograms={activePrograms} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  try {
    const { data: homePageData } = await axios.get<CMSDataItem<{ title: string; heroDescription: string }>>(
      '/home-page-contents/1',
      {
        baseURL: process.env.API_BASE_URL,
      },
    )
    const { data: activeProgramsData } = await axios.get<CMSDataItems<{ title: string; description: string }>>(
      '/active-programs',
      {
        baseURL: process.env.API_BASE_URL,
      },
    )

    const pageData = extractDataFromCMSDataItem(homePageData)
    const activePrograms = extractDataFromCMSDataItems(activeProgramsData)

    return {
      props: {
        title: pageData.title,
        heroDescription: pageData.heroDescription,
        activePrograms,
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
