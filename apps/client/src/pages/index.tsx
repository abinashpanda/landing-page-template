import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Home from 'page-components/home'
import type { HomeProps } from 'page-components/home'
import axios from 'axios'
import { CMSData } from 'types/cms'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function HomePage({ title, heroDescription }: HomePageProps) {
  return <Home title={title} heroDescription={heroDescription} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  try {
    const { data } = await axios.get<CMSData<{ title: string; heroDescription: string }>>('/home-page-contents', {
      baseURL: process.env.API_BASE_URL,
    })

    // use the first item as the data
    const pageData = data.data?.[0]

    if (!pageData) {
      return {
        redirect: {
          permanent: false,
          destination: '/404',
        },
      }
    }

    return {
      props: {
        title: pageData.attributes.title ?? '',
        heroDescription: pageData.attributes.heroDescription ?? '',
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
