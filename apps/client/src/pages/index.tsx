import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Home from 'page-components/home'
import type { HomeProps } from 'page-components/home'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function HomePage({ title }: HomePageProps) {
  return (
    <Home title={title} />
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  return {
    props: {
      title: 'Home',
    }
  }
}
