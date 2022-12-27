import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Home from 'page-components/home'
import type { HomeProps } from 'page-components/home'
import axios from 'axios'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function HomePage({ title, heroDescription }: HomePageProps) {
  return <Home title={title} heroDescription={heroDescription} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  try {
    const { data } = await axios.get<{
      data: { id: number; attributes: { title: string; heroDescription: string } }[]
    }>('/home-page-contents', {
      baseURL: process.env.API_BASE_URL,
    })

    return {
      props: {
        title: data.data[0]?.attributes?.title ?? '',
        heroDescription: data.data[0]?.attributes?.heroDescription ?? '',
      },
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }
}
